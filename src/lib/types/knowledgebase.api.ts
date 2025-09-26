import { ApiResponse } from './api.interface';

// Knowledge Base DTOs
export interface KnowledgeBaseApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  type: KnowledgeBaseType;
  status: KnowledgeBaseStatus;
  source?: string;
  chunkCount?: number;
  lastUpdated?: Date;
  nextUpdateAt?: Date;
  updateFrequency?: KBUpdateFrequency;
  errorMessage?: string;
}

export interface KnowledgeBaseListApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  type: KnowledgeBaseType;
  status: KnowledgeBaseStatus;
  source?: string;
  chunkCount?: number;
  lastUpdated?: Date;
  nextUpdateAt?: Date;
  updateFrequency?: KBUpdateFrequency;
}

// Request DTOs
export interface CreateKnowledgeBaseApiDto {
  name: string;
  description?: string;
  type: KnowledgeBaseType;
  source?: string;
  content?: string;
}

// Response DTOs
export interface CreateKnowledgeBaseResponseDto extends ApiResponse<KnowledgeBaseApiDto> {}

export interface GetKnowledgeBaseResponseDto extends ApiResponse<KnowledgeBaseApiDto> {}

export interface GetKnowledgeBasesResponseDto extends ApiResponse<KnowledgeBaseListApiDto[]> {} 

export enum KnowledgeBaseType {
  TEXT = 'text',
  FILE = 'file',
  URL = 'url'
}

export enum KnowledgeBaseStatus {
  PROCESSING = 'processing',
  READY = 'ready',
  ERROR = 'error'
}

export enum KBUpdateFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  NEVER = 'never'
}