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
  defaultModelName: string;
  modelNames?: string[];
  model?: string;
  toolConfigs?: ToolConfigs;
}

export interface UpdateWorkerApiDto {
  name?: string;
  description?: string;
  instructions?: string;
  defaultModelName: string;
  modelNames?: string[];
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