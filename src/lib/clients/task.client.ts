import { BaseClient } from '../base/base-client';
import { 
  CreateTaskRequest, 
  CreateTaskResponseDto, 
  ListTasksResponseDto, 
  GetTaskResponseDto, 
  UpdateTaskResponseDto, 
  SubmitToolOutputsRequest, 
  SubmitToolOutputsResponseDto, 
  CancelTaskResponseDto, 
  ResumeTaskResponseDto, 
  TaskApiDto 
} from '../types/task.api';

export class ByteEngineTaskClient extends BaseClient {
  /**
   * Create a task
   */
  async createTask(sessionId: string, data: CreateTaskRequest): Promise<CreateTaskResponseDto> {
    return this.post<TaskApiDto>(`api/sessions/${sessionId}/tasks`, data);
  }

  // /**
  //  * Create a session and task in one request
  //  */
  // async createSessionAndTask(data: CreateSessionAndTaskRequest): Promise<any> {
  //   return this.post<any>('api/sessions/tasks', data);
  // }

  /**
   * List tasks for a session
   */
  async listTasks(sessionId: string, options?: {
    after?: string;
    before?: string;
    limit?: number;
    order?: 'asc' | 'desc';
  }): Promise<ListTasksResponseDto> {
    const params = new URLSearchParams();
    if (options?.after) params.append('after', options.after);
    if (options?.before) params.append('before', options.before);
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.order) params.append('order', options.order);

    const queryString = params.toString();
    const url = `api/sessions/${sessionId}/tasks${queryString ? `?${queryString}` : ''}`;
    
    return this.get<TaskApiDto[]>(url);
  }

  /**
   * Get a task by ID
   */
  async getTask(sessionId: string, taskId: string): Promise<GetTaskResponseDto> {
    return this.get<TaskApiDto>(`api/sessions/${sessionId}/tasks/${taskId}`);
  }

  /**
   * Update a task (metadata only)
   */
  async updateTask(sessionId: string, taskId: string, metadata: Record<string, string>): Promise<UpdateTaskResponseDto> {
    return this.put<TaskApiDto>(`api/sessions/${sessionId}/tasks/${taskId}`, { metadata });
  }

  /**
   * Submit tool outputs to a task
   */
  async submitToolOutputs(sessionId: string, taskId: string, data: SubmitToolOutputsRequest): Promise<SubmitToolOutputsResponseDto> {
    return this.post<TaskApiDto>(`api/sessions/${sessionId}/tasks/${taskId}/submit_tool_outputs`, data);
  }

  /**
   * Cancel a task
   */
  async cancelTask(sessionId: string, taskId: string): Promise<CancelTaskResponseDto> {
    return this.post<TaskApiDto>(`api/sessions/${sessionId}/tasks/${taskId}/cancel`);
  }

  /**
   * Resume a task
   */
  async resumeTask(sessionId: string, taskId: string): Promise<ResumeTaskResponseDto> {
    return this.post<TaskApiDto>(`api/sessions/${sessionId}/tasks/${taskId}/resume`);
  }
} 