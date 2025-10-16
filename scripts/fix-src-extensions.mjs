#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';

const SRC_DIR = new URL('../src', import.meta.url).pathname;

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const abs = join(dir, entry);
    const st = statSync(abs);
    if (st.isDirectory()) {
      files.push(...walk(abs));
    } else {
      files.push(abs);
    }
  }
  return files;
}

function fixFile(filePath) {
  if (extname(filePath) !== '.ts') return false;
  const src = readFileSync(filePath, 'utf8');
  const pattern = /(from\s+['"](\.\.?\/[^'"\n]+)['"])|(import\s*\(\s*['"](\.\.?\/[^'"\n]+)['"]\s*\))/g;
  let changed = false;
  const out = src.replace(pattern, (match) => {
    const quote = match.includes("'") ? "'" : '"';
    const parts = match.split(quote);
    if (parts.length < 3) return match;
    const spec = parts[1];
    if (!spec.startsWith('./') && !spec.startsWith('../')) return match;
    if (/\.(js|mjs|cjs|json|ts)$/.test(spec)) return match;
    const candidate = join(dirname(filePath), spec);
    let updated;
    try {
      const st = statSync(candidate);
      if (st.isDirectory()) {
        updated = spec.replace(/\/$/, '') + '/index.js';
      } else {
        updated = spec + '.js';
      }
    } catch {
      updated = spec + '.js';
    }
    changed = true;
    return match.replace(spec, updated);
  });
  if (changed) writeFileSync(filePath, out, 'utf8');
  return changed;
}

function main() {
  const files = walk(SRC_DIR);
  let count = 0;
  for (const f of files) {
    if (fixFile(f)) count++;
  }
  console.log(`[fix-src-extensions] Updated ${count} files`);
}

main();


