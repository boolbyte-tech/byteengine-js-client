# ByteEngine JavaScript Client

A comprehensive TypeScript/JavaScript client library for interacting with the ByteEngine API. ByteEngine is a powerful AI platform that provides workers, sessions, tasks, and various AI capabilities.

## Features

- 🤖 **Worker Management** - Create and manage AI workers with different models and configurations
- 💬 **Session Management** - Handle conversational sessions with message history
- 📋 **Task Management** - Execute and monitor AI tasks with tool support
- 🧠 **Knowledge Base** - Manage and query knowledge bases
- 🛠️ **Toolkit Integration** - Attach and configure various tools and functions
- 📁 **Storage** - File upload and storage management
- 🏥 **ByteFhir** - Healthcare-specific FHIR data processing
- 🔧 **Model Management** - Configure and manage AI models
- 🌐 **Endpoint Management** - Manage API endpoints

## Installation

```bash
npm install @boolbyte/engine
```

## Quick Start

```typescript
import { ByteEngineClient, Models } from '@boolbyte/engine';

// Initialize the client
const client = new ByteEngineClient({
  baseUrl: 'https://api.byteengine.boolbyte.com',
  apiKey: 'your-api-key-here',
  timeout: 30000 // optional, in milliseconds
});

// Create a worker
const worker = await client.worker.createWorker({
  name: 'My AI Assistant',
  description: 'A helpful AI assistant',
  instructions: 'You are a helpful AI assistant that can answer questions and help with tasks.',
  defaultModelName: Models.LLAMA_3_70B
});

console.log('Created worker:', worker.data);
```

## Configuration

The `ByteEngineClient` requires the following configuration:

```typescript
interface ByteEngineClientConfig {
  baseUrl: string;    // Your ByteEngine API base URL
  apiKey: string;     // Your API key
  timeout?: number;   // Request timeout in milliseconds (optional)
}
```

## Available Models

The library supports various AI models through the `Models` enum:

```typescript
import { Models } from '@boolbyte/engine';

// Available models
Models.LLAMA_3_70B        // Llama 3 70B
Models.GEMMA_3_12B        // Gemma 3 12B
Models.GEMMA_3_27B        // Gemma 3 27B
Models.DEEPSEEK_R1        // DeepSeek R1
Models.DEEPSEEK_V3_1      // DeepSeek V3.1
Models.KIMI_K2            // Kimi K2
Models.GPT_OSS_20B        // GPT OSS 20B
Models.GPT_OSS_120B       // GPT OSS 120B
Models.MEDGEMMA_4B_IT     // MedGemma 4B IT
```

## Client Modules

The `ByteEngineClient` provides access to various specialized clients:

### Worker Client

Manage AI workers and their configurations:

```typescript
// List all workers
const workers = await client.worker.listWorkers();

// Get a specific worker
const worker = await client.worker.getWorker('worker-id');

// Create a new worker
const newWorker = await client.worker.createWorker({
  name: 'My Worker',
  description: 'A custom AI worker',
  instructions: 'You are a helpful assistant.',
  defaultModelName: Models.LLAMA_3_70B,
  modelNames: [Models.LLAMA_3_70B, Models.GEMMA_3_12B]
});

// Update a worker
const updatedWorker = await client.worker.updateWorker('worker-id', {
  name: 'Updated Worker Name',
  instructions: 'Updated instructions'
});

// Delete a worker
await client.worker.deleteWorker('worker-id');
```

### Session Client

Handle conversational sessions with message management:

```typescript
// Create a new session
const session = await client.session.createSession({
  workerId: 'worker-id',
  metadata: { userId: 'user-123' }
});

// Add a message to the session
await client.session.addMessage('session-id', {
  content: 'Hello, how can you help me?',
  role: 'user'
});

// Send a message (creates and processes)
const response = await client.session.sendMessage('session-id', {
  content: 'What is the weather like?',
  role: 'user'
});

// List all messages in a session
const messages = await client.session.listMessages('session-id');

// Get a specific message
const message = await client.session.getMessage('session-id', 'message-id');

// Parse message content
const messageText = client.session.parseMessage(message.data);

// Update session metadata
await client.session.updateSession('session-id', {
  metadata: { status: 'active' }
});

// List all sessions
const sessions = await client.session.listSessions();

// Delete a session
await client.session.deleteSession('session-id');
```

### Task Client

Execute and monitor AI tasks:

```typescript
// Create a task
const task = await client.task.createTask('session-id', {
  model: Models.LLAMA_3_70B,
  instructions: 'Analyze the following data and provide insights.',
  temperature: 0.7,
  maxCompletionTokens: 1000,
  toolChoice: 'auto'
});

// List tasks for a session
const tasks = await client.task.listTasks('session-id', {
  limit: 10,
  order: 'desc'
});

// Get a specific task
const taskDetails = await client.task.getTask('session-id', 'task-id');

// Submit tool outputs (when task requires action)
await client.task.submitToolOutputs('session-id', 'task-id', {
  toolOutputs: [
    {
      toolCallId: 'call-123',
      output: 'Tool execution result'
    }
  ]
});

// Cancel a task
await client.task.cancelTask('session-id', 'task-id');

// Resume a cancelled task
await client.task.resumeTask('session-id', 'task-id');

// Update task metadata
await client.task.updateTask('session-id', 'task-id', {
  metadata: { priority: 'high' }
});
```

### Knowledge Base Client

Manage knowledge bases for enhanced AI responses:

```typescript
// List knowledge bases
const knowledgeBases = await client.knowledgeBase.listKnowledgeBases();

// Create a knowledge base
const kb = await client.knowledgeBase.createKnowledgeBase({
  name: 'Company Documentation',
  description: 'Internal company knowledge base'
});

// Upload documents to knowledge base
const uploadResult = await client.knowledgeBase.uploadDocument('kb-id', file);

// Query knowledge base
const results = await client.knowledgeBase.queryKnowledgeBase('kb-id', {
  query: 'What is our company policy on remote work?',
  limit: 5
});
```

### Storage Client

Handle file uploads and storage:

```typescript
// Upload a file
const fileUpload = await client.storage.uploadFile(file, {
  purpose: 'document',
  metadata: { category: 'research' }
});

// List files
const files = await client.storage.listFiles();

// Get file details
const fileDetails = await client.storage.getFile('file-id');

// Download file content
const fileContent = await client.storage.downloadFile('file-id');

// Delete a file
await client.storage.deleteFile('file-id');
```

### Toolkit Client

Manage tools and toolkits for workers:

```typescript
// List available toolkits
const toolkits = await client.toolkit.listToolkits();

// Get toolkit details
const toolkit = await client.toolkit.getToolkit('toolkit-name');

// List tools in a toolkit
const tools = await client.toolkit.listTools('toolkit-name');
```

### Model Client

Manage AI models and configurations:

```typescript
// List available models
const models = await client.model.listModels();

// Get model details
const model = await client.model.getModel('model-name');
```

### ByteFhir Client

Healthcare-specific FHIR server management:

```typescript
// List all FHIR servers
const fhirServers = await client.byteFhir.listFhirServers();

// Get a specific FHIR server
const server = await client.byteFhir.getFhirServer('server-id');

// Create a new FHIR server
const newServer = await client.byteFhir.createFhirServer({
  name: 'My FHIR Server',
  description: 'Healthcare data server',
  region: 'global',
  fhirVersion: 'R4',
  testServer: false
});
```

## Error Handling

The client provides comprehensive error handling:

```typescript
try {
  const worker = await client.worker.createWorker({
    name: 'Test Worker',
    defaultModelName: Models.LLAMA_3_70B
  });
} catch (error) {
  if (error.message.includes('ByteEngine API Error')) {
    console.error('API Error:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Response Format

All API responses follow a consistent format:

```typescript
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  total?: number;
  firstId?: string;
  lastId?: string;
  hasMore?: boolean;
}
```

## Pagination

Many list endpoints support pagination:

```typescript
// List with pagination
const tasks = await client.task.listTasks('session-id', {
  after: 'task-id',  // Get tasks after this ID
  limit: 20,         // Limit results
  order: 'desc'      // Sort order
});

// Check if there are more results
if (tasks.hasMore) {
  const nextPage = await client.task.listTasks('session-id', {
    after: tasks.lastId,
    limit: 20
  });
}
```

## TypeScript Support

The library is built with TypeScript and provides full type definitions:

```typescript
import { 
  ByteEngineClient, 
  Models, 
  TaskStatus, 
  MessageRole,
  CreateWorkerApiDto,
  SessionApiDto 
} from '@boolbyte/engine';

// All types are available for your use
const workerData: CreateWorkerApiDto = {
  name: 'Typed Worker',
  defaultModelName: Models.LLAMA_3_70B
};
```

## Advanced Usage

### Custom Timeout Configuration

```typescript
const client = new ByteEngineClient({
  baseUrl: 'https://api.byteengine.boolbyte.com',
  apiKey: 'your-api-key',
  timeout: 60000 // 60 seconds
});
```

### Working with Message Content

```typescript
// Complex message content with annotations
const message = await client.session.sendMessage('session-id', {
  content: [
    {
      type: 'text',
      text: {
        value: 'Please analyze this document',
        annotations: []
      }
    },
    {
      type: 'image_url',
      image_url: {
        url: 'https://example.com/image.jpg',
        detail: 'high'
      }
    }
  ],
  role: 'user'
});
```

### Task Status Monitoring

```typescript
// Poll task status until completion
async function waitForTaskCompletion(sessionId: string, taskId: string) {
  while (true) {
    const task = await client.task.getTask(sessionId, taskId);
    
    if (task.data.status === 'completed') {
      return task.data;
    } else if (task.data.status === 'failed') {
      throw new Error(`Task failed: ${task.data.lastError?.message}`);
    }
    
    // Wait before polling again
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
```

## Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📖 [Documentation](https://docs.byteengine.boolbyte.com)
- 🐛 [Issue Tracker](https://github.com/boolbyte-tech/byteengine-js-client/issues)
- 💬 [Discord Community](https://discord.gg/byteengine)
- 📧 [Email Support](mailto:support@boolbyte.com)

## Changelog

This project uses automatic changelog generation based on [Conventional Commits](https://www.conventionalcommits.org/). The changelog is automatically updated with each release.

- **Current Changelog**: See [CHANGELOG.md](CHANGELOG.md) for the latest changes
- **Changelog Guide**: See [CHANGELOG_GUIDE.md](CHANGELOG_GUIDE.md) for detailed instructions on automatic changelog generation
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md) for commit message guidelines

### Automatic Changelog Generation

The changelog is automatically generated from commit messages using:
- **Standard Version** - For version bumping and release changelog generation
- **Auto Changelog** - For continuous changelog updates
- **Conventional Commits** - For consistent commit message format

### Quick Commands

```bash
# Make a conventional commit
npm run commit

# Generate changelog from commits
npm run changelog

# Create a new release (version bump + changelog)
npm run release
```
