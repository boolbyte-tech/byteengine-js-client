// Model enums
export enum Models {
    LLAMA_3_70B = 'llama-3-70b',
    GEMMA_3_12B = 'gemma-3-12b',
    GEMMA_3_27B = 'gemma-3-27b',
    // GEMINI_2_5_PRO = 'gemini-2-5-pro',
    // GEMINI_2_5_FLASH = 'gemini-2-5-flash',
    // GEMINI_2_5_FLASH_LITE = 'gemini-2-5-flash-lite',
    DEEPSEEK_R1 = 'deepseek-r1',
    DEEPSEEK_V3_1 = 'deepseek-v3.1',
    KIMI_K2 = 'kimi-k2',
    // GPT_5 = 'gpt-5',
    // GPT_5_MINI = 'gpt-5-mini',
    // GPT_5_NANO = 'gpt-5-nano',
    GPT_OSS_20B = 'gpt-oss-20b',
    GPT_OSS_120B = 'gpt-oss-120b',
    // GROK_3 = 'grok-3',
    // GROK_3_MINI = 'grok-3-mini',
    // GROK_4 = 'grok-4',
    // BYTEMEDICAL_4B = 'byte-medical-4b',
    MEDGEMMA_4B_IT = 'medgemma-4b-it',
}
import { ApiResponse } from './api.interface'
import { ToolConfigs } from './toolkit.api';

// Worker DTOs
export interface WorkerApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  instructions?: string;
  model?: string;
  endpointId?: string;
  toolConfigs?: ToolConfigs;
  teamId: string;
}

export interface WorkerListApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  instructions: string;
  model?: string;
  endpointId?: string;
  teamId: string;
}

export interface WorkerToolDto {
  toolName: string;
  permissions?: string[];
  config?: Record<string, any>;
}

export interface WorkerKnowledgeBaseDto {
  knowledgeBaseId: string;
  config?: Record<string, any>;
}

export interface WorkerFunctionDto {
  functionId: string;
  permissions?: string[];
  config?: Record<string, any>;
}

export interface WorkerModelDto {
  modelId: string;
  config?: Record<string, any>;
}

export interface WorkerToolkitDto {
  toolkitName: string;
  permissions?: string[];
  config?: Record<string, any>;
  excludeToolIds?: string[];
}

// Request DTOs
export interface CreateWorkerApiDto {
  name: string;
  description?: string;
  instructions?: string;
  defaultModelName: Models;
  modelNames?: Models[];
  model?: string;
  toolConfigs?: ToolConfigs;
}

export interface UpdateWorkerApiDto {
  name?: string;
  description?: string;
  instructions?: string;
  defaultModelName: Models;
  modelNames?: Models[];
  model?: string;
  toolConfigs?: ToolConfigs;
}

export interface AttachToolToWorkerApiDto {
  toolName: string;
  permissions?: string[];
  config?: Record<string, any>;
}

export interface AttachMultipleToolsToWorkerApiDto {
  tools: WorkerToolDto[];
}

export interface RemoveToolFromWorkerApiDto {
  toolName: string;
}

export interface RemoveMultipleToolsFromWorkerApiDto {
  toolNames: string[];
}

export interface AttachFunctionToWorkerApiDto {
  functionId: string;
  permissions?: string[];
  config?: Record<string, any>;
}

export interface AttachMultipleFunctionsToWorkerApiDto {
  functions: Array<{
    functionId: string;
    permissions?: string[];
    config?: Record<string, any>;
  }>;
}

export interface RemoveFunctionFromWorkerApiDto {
  functionId: string;
}

export interface RemoveMultipleFunctionsFromWorkerApiDto {
  functionIds: string[];
}

export interface AttachKnowledgeBaseToWorkerApiDto {
  knowledgeBaseId: string;
  config?: Record<string, any>;
}

export interface AttachMultipleKnowledgeBasesToWorkerApiDto {
  knowledgeBases: Array<{
    knowledgeBaseId: string;
    config?: Record<string, any>;
  }>;
}

export interface RemoveKnowledgeBaseFromWorkerApiDto {
  knowledgeBaseId: string;
}

export interface RemoveMultipleKnowledgeBasesFromWorkerApiDto {
  knowledgeBaseIds: string[];
}

export interface AddModelToWorkerApiDto {
  modelId: string;
  config?: Record<string, any>;
}

export interface AddMultipleModelsToWorkerApiDto {
  models: WorkerModelDto[];
}

export interface RemoveModelFromWorkerApiDto {
  modelId: string;
}

export interface RemoveMultipleModelsFromWorkerApiDto {
  modelIds: string[];
}

export interface AttachToolkitToWorkerApiDto {
  toolkitName: string;
  permissions?: string[];
  config?: Record<string, any>;
  excludeToolIds?: string[];
}

export interface AttachMultipleToolkitsToWorkerApiDto {
  toolkits: WorkerToolkitDto[];
}

export interface RemoveToolkitFromWorkerApiDto {
  toolkitName: string;
}

export interface RemoveMultipleToolkitsFromWorkerApiDto {
  toolkitNames: string[];
}

// Response DTOs
export interface CreateWorkerResponseDto extends ApiResponse<WorkerApiDto> {}

export interface UpdateWorkerResponseDto extends ApiResponse<WorkerApiDto> {}

export interface GetWorkerResponseDto extends ApiResponse<WorkerApiDto> {}

export interface GetWorkersResponseDto extends ApiResponse<WorkerApiDto[]> {}

export interface DeleteWorkerResponseDto extends ApiResponse<null>{}