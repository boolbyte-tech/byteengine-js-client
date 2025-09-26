# Changelog

All notable changes to the ByteEngine JavaScript Client will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial release of ByteEngine JavaScript Client
- Comprehensive TypeScript support with full type definitions
- Worker management client with CRUD operations
- Session management with message handling
- Task execution and monitoring capabilities
- Knowledge base management
- Storage and file upload functionality
- Toolkit and tool management
- Model configuration and management
- ByteFhir server management for healthcare data
- Endpoint management
- Comprehensive error handling
- Request timeout configuration
- File upload support with FormData
- Pagination support for list endpoints
- Message content parsing utilities
- Automatic changelog generation system
- Conventional commits support
- CI/CD pipeline with automated releases

### Features
- **Worker Client**: Create, read, update, and delete AI workers
- **Session Client**: Manage conversational sessions with full message history
- **Task Client**: Execute AI tasks with tool support and status monitoring
- **Knowledge Base Client**: Manage knowledge bases for enhanced AI responses
- **Storage Client**: Handle file uploads and storage management
- **Toolkit Client**: Manage tools and toolkits for workers
- **Model Client**: Configure and manage AI models
- **ByteFhir Client**: Healthcare-specific FHIR server management
- **Endpoint Client**: Manage API endpoints

### Supported Models
- Llama 3 70B
- Gemma 3 12B & 27B
- DeepSeek R1 & V3.1
- Kimi K2
- GPT OSS 20B & 120B
- MedGemma 4B IT

### API Features
- RESTful API design
- Consistent response format across all endpoints
- Comprehensive error handling with meaningful messages
- Request timeout configuration
- File upload support
- Pagination for list endpoints
- TypeScript-first design with full type safety

---

*This changelog is automatically generated from commit messages. For detailed instructions on automatic changelog generation, see [CHANGELOG_GUIDE.md](./CHANGELOG_GUIDE.md).*