# Contributing to ByteEngine JavaScript Client

Thank you for your interest in contributing to the ByteEngine JavaScript Client! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Release Process](#release-process)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@boolbyte.com](mailto:conduct@boolbyte.com).

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/byteengine-js-client.git
   cd byteengine-js-client
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/boolbyte-tech/byteengine-js-client.git
   ```

## Development Setup

### Prerequisites

- Node.js 18+ 
- npm 9+
- TypeScript 5.0+

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Run in development mode**:
   ```bash
   npm run dev
   ```

### Project Structure

```
src/
├── index.ts                 # Main entry point
├── lib/
│   ├── base/
│   │   └── base-client.ts   # Base client class
│   ├── byteengine-client.ts # Main client class
│   ├── clients/             # Individual client modules
│   │   ├── worker.client.ts
│   │   ├── session.client.ts
│   │   ├── task.client.ts
│   │   └── ...
│   └── types/               # TypeScript type definitions
│       ├── api.interface.ts
│       ├── worker.api.ts
│       ├── session.api.ts
│       └── ...
```

## Making Changes

### Branch Naming

Use descriptive branch names:
- `feature/worker-tool-management` - New features
- `fix/session-message-parsing` - Bug fixes
- `docs/api-examples` - Documentation updates
- `refactor/base-client-http` - Code refactoring

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. We use an interactive commit tool to ensure consistency:

```bash
npm run commit
```

**Manual Format:**
```
type(scope): description

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(worker): add tool attachment methods
fix(session): handle empty message content
docs(readme): add advanced usage examples
refactor(base-client): improve error handling
```

**For detailed changelog generation instructions, see [CHANGELOG_GUIDE.md](./CHANGELOG_GUIDE.md)**

## Pull Request Process

### Before Submitting

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards

3. **Test your changes**:
   ```bash
   npm run build
   npm test  # if tests exist
   ```

4. **Update documentation** if needed

5. **Commit your changes** with descriptive messages

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Pull Request Guidelines

1. **Create a pull request** against the `main` branch
2. **Provide a clear description** of what the PR does
3. **Reference any related issues** using `Fixes #123` or `Closes #123`
4. **Include screenshots** for UI changes
5. **Ensure all CI checks pass**

### PR Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Edge cases considered

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

## Coding Standards

### TypeScript

- Use **strict TypeScript** configuration
- Prefer **interfaces** over types for object shapes
- Use **explicit return types** for public methods
- Follow **camelCase** for variables and functions
- Use **PascalCase** for classes and interfaces

### Code Style

- Use **2 spaces** for indentation
- Use **single quotes** for strings
- Add **trailing commas** in objects and arrays
- Use **semicolons**
- Maximum line length: **100 characters**

### Example

```typescript
interface CreateWorkerOptions {
  name: string;
  description?: string;
  model: Models;
}

export class WorkerClient extends BaseClient {
  async createWorker(options: CreateWorkerOptions): Promise<WorkerResponse> {
    const response = await this.post<WorkerData>('api/workers', {
      name: options.name,
      description: options.description,
      model: options.model,
    });
    
    return response;
  }
}
```

### Error Handling

- Always handle errors appropriately
- Provide meaningful error messages
- Use the base client's error handling patterns
- Don't expose internal implementation details

### API Design

- Follow **RESTful** conventions
- Use **consistent naming** across all clients
- Provide **clear method signatures**
- Include **JSDoc comments** for public methods

## Testing

### Writing Tests

- Write **unit tests** for new functionality
- Test **error cases** and edge conditions
- Mock external dependencies
- Aim for **high test coverage**

### Test Structure

```typescript
describe('WorkerClient', () => {
  describe('createWorker', () => {
    it('should create a worker with valid data', async () => {
      // Test implementation
    });

    it('should throw error for invalid data', async () => {
      // Test error case
    });
  });
});
```

## Documentation

### Code Documentation

- Add **JSDoc comments** for all public methods
- Include **parameter descriptions** and **return types**
- Provide **usage examples** in complex methods

```typescript
/**
 * Create a new worker with the specified configuration
 * @param options - Worker configuration options
 * @returns Promise resolving to the created worker data
 * @throws {Error} When worker creation fails
 * @example
 * ```typescript
 * const worker = await client.worker.createWorker({
 *   name: 'My Worker',
 *   model: Models.LLAMA_3_70B
 * });
 * ```
 */
async createWorker(options: CreateWorkerOptions): Promise<WorkerResponse> {
  // Implementation
}
```

### README Updates

- Update the README for new features
- Add usage examples
- Update the API reference
- Keep examples current and working

## Release Process

### Versioning

We follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Release Checklist

1. **Update version** in `package.json`
2. **Update CHANGELOG.md** with new features/fixes
3. **Create release notes**
4. **Tag the release**
5. **Publish to npm**

## Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **Discord**: For community discussion
- **Email**: [support@boolbyte.com](mailto:support@boolbyte.com) for direct support

## Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **Release notes**
- **GitHub contributors** page

Thank you for contributing to ByteEngine! 🚀
