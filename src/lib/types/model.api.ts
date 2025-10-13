import { ApiResponse } from './api.interface';

// Model DTOs
export interface ModelApiDto {
  id: string;
  name: string;
  description: string;
}

export interface GetModelsResponseDto extends ApiResponse<ModelApiDto[]> {}