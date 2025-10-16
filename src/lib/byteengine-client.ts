import { ByteEngineWorkerClient } from './clients/worker.client.js';
import { ByteEngineToolkitClient } from './clients/toolkit.client.js';
import { ByteEngineKnowledgeBaseClient } from './clients/knowledgebase.client.js';
import { ByteEngineStorageClient } from './clients/storage.client.js';
import { ByteEngineModelClient } from './clients/model.client.js';
import { ByteEngineTaskClient } from './clients/task.client.js';
import { ByteEngineSessionClient } from './clients/session.client.js';
import { ByteEngineDataStoreClient } from './clients/bytefhir.client.js';


export interface ByteEngineClientConfig {
  baseUrl: string;
  apiKey: string;
  timeout?: number;
}

export class ByteEngineClient {
  private config: ByteEngineClientConfig;

  // Client instances
  public readonly worker: ByteEngineWorkerClient;
  public readonly toolkit: ByteEngineToolkitClient;
  public readonly knowledgeBase: ByteEngineKnowledgeBaseClient;
  public readonly storage: ByteEngineStorageClient;
  public readonly model: ByteEngineModelClient;
  public readonly task: ByteEngineTaskClient;
  public readonly session: ByteEngineSessionClient;
  public readonly store: ByteEngineDataStoreClient;

  constructor(config: ByteEngineClientConfig) {
    this.config = config;
    
    // Initialize client instances
    this.worker = new ByteEngineWorkerClient(this.config);
    this.toolkit = new ByteEngineToolkitClient(this.config);
    this.knowledgeBase = new ByteEngineKnowledgeBaseClient(this.config);
    this.storage = new ByteEngineStorageClient(this.config);
    this.model = new ByteEngineModelClient(this.config);
    this.task = new ByteEngineTaskClient(this.config);
    this.session = new ByteEngineSessionClient(this.config);
    this.store = new ByteEngineDataStoreClient(this.config);
  }
}
