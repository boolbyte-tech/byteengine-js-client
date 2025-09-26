import { ApiResponse } from './api.interface';

// Model DTOs
export interface ModelApiDto {
  id: string;
  name: string;
  description: string;
}

// Request DTOs
export interface CreateModelApiDto {
  name: string;
  description: string;
  modifier?: number;
}

export interface UpdateModelApiDto {
  name?: string;
  description?: string;
  modifier?: number;
}

export interface GetModelsResponseDto extends ApiResponse<ModelApiDto[]> {}