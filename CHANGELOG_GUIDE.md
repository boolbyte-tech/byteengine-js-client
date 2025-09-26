# Automatic Changelog Generation Guide

This guide explains how to automatically generate changelogs for the ByteEngine JavaScript Client using conventional commits and automated tools.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Make Commits Using Conventional Format

```bash
# Use the interactive commit tool
npm run commit

# Or commit manually with conventional format
git commit -m "feat(worker): add tool attachment methods"
```

### 3. Generate Changelog

```bash
# Generate changelog from commits
npm run changelog

# Or create a new release (bumps version + generates changelog)
npm run release
```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run commit` | Interactive commit with conventional format |
| `npm run changelog` | Generate changelog from commits |
| `npm run release` | Create new release (auto-version + changelog) |
| `npm run release:patch` | Create patch release (1.0.0 → 1.0.1) |
| `npm run release:minor` | Create minor release (1.0.0 → 1.1.0) |
| `npm run release:major` | Create major release (1.0.0 → 2.0.0) |

## 📝 Conventional Commits Format

All commits should follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat(worker): add tool attachment methods` |
| `fix` | Bug fix | `fix(session): handle empty message content` |
| `docs` | Documentation | `docs(readme): add advanced usage examples` |
| `style` | Code style | `style: fix linting errors` |
| `refactor` | Code refactoring | `refactor(base-client): improve error handling` |
| `perf` | Performance | `perf(worker): optimize API calls` |
| `test` | Tests | `test(session): add message parsing tests` |
| `chore` | Maintenance | `chore: update dependencies` |
| `build` | Build system | `build: update TypeScript config` |
| `ci` | CI/CD | `ci: add automated testing` |

### Breaking Changes

Use `!` after the type/scope to indicate breaking changes:

```
feat(api)!: change response format

BREAKING CHANGE: The API response format has changed from object to array
```

## 🔧 Tools Used

### 1. Commitizen
Interactive commit tool that ensures consistent commit messages.

**Usage:**
```bash
npm run commit
```

**Features:**
- Interactive prompts for commit type, scope, and description
- Validates commit message format
- Ensures conventional commit compliance

### 2. Standard Version
Automates versioning and changelog generation based on conventional commits.

**Usage:**
```bash
npm run release
```

**Features:**
- Automatically determines version bump based on commit types
- Generates changelog from commit history
- Updates package.json version
- Creates git tags
- Commits changes

### 3. Auto Changelog
Alternative changelog generator with more customization options.

**Usage:**
```bash
npm run changelog
```

**Features:**
- Generates changelog from git history
- Supports custom templates
- Can include unreleased changes
- More flexible formatting options

## 📊 Version Bumping Rules

Standard Version automatically determines version bumps based on commit types:

| Commit Type | Version Bump | Example |
|-------------|--------------|---------|
| `feat` | Minor (1.0.0 → 1.1.0) | New features |
| `fix` | Patch (1.0.0 → 1.0.1) | Bug fixes |
| `perf` | Patch (1.0.0 → 1.0.1) | Performance improvements |
| `BREAKING CHANGE` | Major (1.0.0 → 2.0.0) | Breaking changes |
| `chore`, `docs`, `style`, `refactor`, `test`, `build`, `ci` | No bump | Maintenance |

## 🎯 Workflow Examples

### Feature Development

```bash
# 1. Make changes
git add .
npm run commit  # Interactive commit

# 2. Push changes
git push origin feature/new-feature

# 3. Create PR and merge

# 4. Generate release
npm run release
```

### Bug Fix

```bash
# 1. Fix the bug
git add .
npm run commit  # "fix(worker): resolve tool attachment issue"

# 2. Create patch release
npm run release:patch
```

### Breaking Change

```bash
# 1. Make breaking changes
git add .
npm run commit  # "feat(api)!: change response format"

# 2. Create major release
npm run release:major
```

## 📁 Configuration Files

### `.versionrc.json`
Configuration for standard-version:

```json
{
  "types": {
    "feat": { "section": "Features" },
    "fix": { "section": "Bug Fixes" },
    "docs": { "section": "Documentation" }
  },
  "commitUrlFormat": "{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
  "compareUrlFormat": "{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}"
}
```

### `package.json` Config
Commitizen configuration:

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

## 🔄 CI/CD Integration

### GitHub Actions Example

```yaml
name: Release
on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Release
        run: npm run release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 🎨 Customization

### Custom Changelog Template

Create a custom template for auto-changelog:

```bash
# Create template file
echo "## [{{version}}] - {{date}}" > changelog-template.hbs

# Use custom template
auto-changelog --template changelog-template.hbs
```

### Custom Commit Types

Add custom commit types to `.versionrc.json`:

```json
{
  "types": {
    "security": {
      "section": "Security"
    },
    "i18n": {
      "section": "Internationalization"
    }
  }
}
```

## 🐛 Troubleshooting

### Common Issues

1. **No commits found**: Ensure you have conventional commits
2. **Version not bumped**: Check commit types and breaking changes
3. **Changelog not generated**: Verify git history and commit format

### Debug Commands

```bash
# Check commit history
git log --oneline

# Verify conventional commits
npx commitlint --from HEAD~1 --to HEAD --verbose

# Test standard-version without committing
npx standard-version --dry-run
```

## 📚 Additional Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Standard Version](https://github.com/conventional-changelog/standard-version)
- [Auto Changelog](https://github.com/cookpete/auto-changelog)
- [Commitizen](https://github.com/commitizen/cz-cli)

## 🤝 Best Practices

1. **Always use conventional commits** for consistency
2. **Use interactive commit tool** (`npm run commit`) when possible
3. **Review generated changelog** before releasing
4. **Test releases** in development environment first
5. **Keep commit messages clear** and descriptive
6. **Use scopes** to group related changes
7. **Document breaking changes** clearly

---

*This guide ensures consistent, automated changelog generation for the ByteEngine JavaScript Client project.*
