#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';

const DIST_DIR = new URL('../dist', import.meta.url).pathname;

/** Recursively walk a directory and return file paths */
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

/** Append .js to bare relative imports (./x, ../y, not ending with .js|.json|.mjs|.cjs) */
function fixFile(filePath) {
  if (extname(filePath) !== '.js') return false;
  const src = readFileSync(filePath, 'utf8');
  const pattern = /(from\s+['"](\.\.?\/[^'"\n]+)['"])|(import\s*\(\s*['"](\.\.?\/[^'"\n]+)['"]\s*\))/g;
  let changed = false;
  const out = src.replace(pattern, (match) => {
    const quote = match.includes("'") ? "'" : '"';
    const parts = match.split(quote);
    if (parts.length < 3) return match;
    const spec = parts[1];
    if (!spec.startsWith('./') && !spec.startsWith('../')) return match;
    if (/\.(js|mjs|cjs|json)$/.test(spec)) return match;
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
      // If path doesn't exist, default to .js
      updated = spec + '.js';
    }
    changed = true;
    return match.replace(spec, updated);
  });
  if (changed) writeFileSync(filePath, out, 'utf8');
  return changed;
}

function main() {
  const files = walk(DIST_DIR);
  let count = 0;
  for (const f of files) {
    if (fixFile(f)) count++;
  }
  console.log(`[fix-esm-extensions] Updated ${count} files`);
}

main();


