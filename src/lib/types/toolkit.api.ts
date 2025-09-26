import { ApiResponse } from './api.interface';

// Toolkit DTOs
export interface ToolkitApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
  tools: ToolApiDto[];
}

export interface ToolApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description?: string;
}

// Response DTOs
export interface GetToolkitsWithToolsResponseDto extends ApiResponse<ToolkitApiDto[]> {}

export interface GetToolsResponseDto extends ApiResponse<ToolApiDto[]> {} 

export interface ToolConfigs {
  tools?: ToolConfig[];
  toolkits?: ToolkitConfig[];
  functions?: FunctionConfig[];
}

export interface ToolConfig {
  toolName: string;
  config?: Record<string, any>;
}

export interface ToolkitConfig {
  toolkitName: string;
  config?: Record<string, any>;
  excludeToolNames?: string[];
}

export interface FunctionConfig {
  functionName: string;
  description: string;
  parameters: Record<string, any>;
}
