import { BaseClient } from '../base/base-client';
import { GetModelsResponseDto, ModelApiDto } from '../types/model.api';

export class ByteEngineModelClient extends BaseClient {
  /**
   * Get all models
   */
  async getModels(): Promise<GetModelsResponseDto> {
    return this.get<ModelApiDto[]>('api/models');
  } 
}
