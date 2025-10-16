import { BaseClient } from '../base/base-client.js';
import { GetModelsResponseDto, ModelApiDto } from '../types/model.api.js';

export class ByteEngineModelClient extends BaseClient {
  /**
   * Get all models
   */
  async getModels(): Promise<GetModelsResponseDto> {
    return this.get<ModelApiDto[]>('api/models');
  } 
}
