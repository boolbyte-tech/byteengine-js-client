import { WorkerClient } from './clients/worker.client.js';
import { ToolkitClient } from './clients/toolkit.client.js';
import { KnowledgeBaseClient } from './clients/knowledgebase.client.js';
import { StorageClient } from './clients/storage.client.js';
import { ModelClient } from './clients/model.client.js';
import { TaskClient } from './clients/task.client.js';
import { SessionClient } from './clients/session.client.js';
import { DataStoreClient } from './clients/bytefhir.client.js';


export interface EngineClientConfig {
  baseUrl?: string;
  apiKey: string;
  timeout?: number;
}

    export class EngineClient {
  private config: EngineClientConfig;

  // Client instances
  public readonly worker: WorkerClient;
  public readonly toolkit: ToolkitClient;
  public readonly knowledgeBase: KnowledgeBaseClient;
  public readonly storage: StorageClient;
  public readonly model: ModelClient;
  public readonly task: TaskClient;
  public readonly session: SessionClient;
  public readonly dataStore: DataStoreClient;

  constructor(config: EngineClientConfig) {
    this.config = {
      baseUrl: config.baseUrl || 'https://api.engine.boolbyte.com',
      apiKey: config.apiKey,
      timeout: config.timeout || 30000
    };
    
    // Initialize client instances
    this.worker = new WorkerClient(this.config);
    this.toolkit = new ToolkitClient(this.config);
    this.knowledgeBase = new KnowledgeBaseClient(this.config);
    this.storage = new StorageClient(this.config);
    this.model = new ModelClient(this.config);
    this.task = new TaskClient(this.config);
    this.session = new SessionClient(this.config);
    this.dataStore = new DataStoreClient(this.config);
  }
}
