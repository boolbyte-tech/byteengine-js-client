import { BaseClient } from '../base/base-client.js';
import { 
  GetToolkitsWithToolsResponseDto, 
  GetToolsResponseDto, 
  ToolkitApiDto, 
  ToolApiDto 
} from '../types/toolkit.api.js';

export class ByteEngineToolkitClient extends BaseClient {
  /**
   * Get all toolkits with their tools
   */
  async getToolkitsWithTools(): Promise<GetToolkitsWithToolsResponseDto> {
    return this.get<ToolkitApiDto[]>('api/tool/toolkits');
  }

  /**
   * Get all tools
   */
  async getTools(): Promise<GetToolsResponseDto> {
    return this.get<ToolApiDto[]>('api/tool/tools');
  }
} 