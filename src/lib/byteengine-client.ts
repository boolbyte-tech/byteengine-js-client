import { ByteEngineWorkerClient } from './clients/worker.client';
import { ByteEngineToolkitClient } from './clients/toolkit.client';
import { ByteEngineKnowledgeBaseClient } from './clients/knowledgebase.client';
import { ByteEngineStorageClient } from './clients/storage.client';
import { ByteEngineModelClient } from './clients/model.client';
import { ByteEngineTaskClient } from './clients/task.client';
import { ByteEngineSessionClient } from './clients/session.client';
import { ByteEngineByteFhirClient } from './clients/bytefhir.client';

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
  public readonly byteFhir: ByteEngineByteFhirClient;

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
    this.byteFhir = new ByteEngineByteFhirClient(this.config);
  }
}
