import { BaseClient } from '../base/base-client.js';
import { 
  GetKnowledgeBasesResponseDto, 
  GetKnowledgeBaseResponseDto, 
  CreateKnowledgeBaseApiDto, 
  CreateKnowledgeBaseResponseDto, 
  KnowledgeBaseApiDto 
} from '../types/knowledgebase.api.js';

export class KnowledgeBaseClient extends BaseClient {
  /** 
   * List all knowledge bases
   */
  async listKnowledgeBases(): Promise<GetKnowledgeBasesResponseDto> {
    return this.get<KnowledgeBaseApiDto[]>('api/knowledgebase/list');
  }

  /**
   * Get a knowledge base by ID
   */
  async getKnowledgeBase(knowledgeBaseId: string): Promise<GetKnowledgeBaseResponseDto> {
    return this.get<KnowledgeBaseApiDto>(`api/knowledgebase/${knowledgeBaseId}`);
  }

  /**
   * Create a new knowledge base
   */
  async createKnowledgeBase(data: CreateKnowledgeBaseApiDto): Promise<CreateKnowledgeBaseResponseDto> {
    return this.post<KnowledgeBaseApiDto>('api/knowledgebase/create', data);
  }

  /**
   * Create a knowledge base from file upload
   */
  async createKnowledgeBaseFromFile(file: File, name: string, description?: string): Promise<CreateKnowledgeBaseResponseDto> {
    return this.uploadFile<KnowledgeBaseApiDto>('api/knowledgebase/upload', file, {
      name,
      description
    });
  }
} 