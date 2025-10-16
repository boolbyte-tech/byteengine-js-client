import { BaseClient } from '../base/base-client.js';
import { 
  GetWorkersResponseDto, 
  GetWorkerResponseDto, 
  CreateWorkerApiDto, 
  CreateWorkerResponseDto, 
  UpdateWorkerApiDto, 
  UpdateWorkerResponseDto, 
  DeleteWorkerResponseDto, 
  WorkerApiDto 
} from '../types/worker.api.js';

export class ByteEngineWorkerClient extends BaseClient {
  /**
   * List all workers
   */
  async listWorkers(): Promise<GetWorkersResponseDto> {
    return this.get<WorkerApiDto[]>('api/workers');
  }

  /**
   * Get a worker by ID
   */
  async getWorker(workerId: string): Promise<GetWorkerResponseDto> {
    return this.get<WorkerApiDto>(`api/workers/${workerId}`);
  }

  /**
   * Create a new worker
   */
  async createWorker(data: CreateWorkerApiDto): Promise<CreateWorkerResponseDto> {
    return this.post<WorkerApiDto>('api/workers', data);
  }

  /**
   * Update a worker
   */
  async updateWorker(workerId: string, data: UpdateWorkerApiDto): Promise<UpdateWorkerResponseDto> {
    return this.put<WorkerApiDto>(`api/workers/${workerId}`, data);
  }

  /**
   * Delete a worker
   */
  async deleteWorker(workerId: string): Promise<DeleteWorkerResponseDto> {
    return this.delete(`api/workers/${workerId}`);
  }

  // // Tool Management
  // /**
  //  * Attach a tool to a worker
  //  */
  // async attachToolToWorker(workerId: string, data: AttachToolToWorkerApiDto): Promise<AttachToolResponseDto> {
  //   const response = await this.post<AttachToolResponseDto>(`api/workers/${workerId}/tools/attach`, data);
  //   return response.data!;
  // }

  // /**
  //  * Attach multiple tools to a worker
  //  */
  // async attachMultipleToolsToWorker(workerId: string, data: AttachMultipleToolsToWorkerApiDto): Promise<AttachMultipleToolsResponseDto> {
  //   const response = await this.post<AttachMultipleToolsResponseDto>(`api/workers/${workerId}/tools/attach-multiple`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove a tool from a worker
  //  */
  // async removeToolFromWorker(workerId: string, data: RemoveToolFromWorkerApiDto): Promise<RemoveToolResponseDto> {
  //   const response = await this.post<RemoveToolResponseDto>(`api/worker/${workerId}/tools/remove`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove multiple tools from a worker
  //  */
  // async removeMultipleToolsFromWorker(workerId: string, data: RemoveMultipleToolsFromWorkerApiDto): Promise<RemoveMultipleToolsResponseDto> {
  //   const response = await this.post<RemoveMultipleToolsResponseDto>(`api/worker/${workerId}/tools/remove-multiple`, data);
  //   return response.data!;
  // }

  // // Function Management
  // /**
  //  * Attach a function to a worker
  //  */
  // async attachFunctionToWorker(workerId: string, data: AttachFunctionToWorkerApiDto): Promise<AttachFunctionResponseDto> {
  //   const response = await this.post<AttachFunctionResponseDto>(`api/worker/${workerId}/functions/attach`, data);
  //   return response.data!;
  // }

  // /**
  //  * Attach multiple functions to a worker
  //  */
  // async attachMultipleFunctionsToWorker(workerId: string, data: AttachMultipleFunctionsToWorkerApiDto): Promise<AttachMultipleFunctionsResponseDto> {
  //   const response = await this.post<AttachMultipleFunctionsResponseDto>(`api/worker/${workerId}/functions/attach-multiple`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove a function from a worker
  //  */
  // async removeFunctionFromWorker(workerId: string, data: RemoveFunctionFromWorkerApiDto): Promise<RemoveFunctionResponseDto> {
  //   const response = await this.post<RemoveFunctionResponseDto>(`api/worker/${workerId}/functions/remove`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove multiple functions from a worker
  //  */
  // async removeMultipleFunctionsFromWorker(workerId: string, data: RemoveMultipleFunctionsFromWorkerApiDto): Promise<RemoveMultipleFunctionsResponseDto> {
  //   const response = await this.post<RemoveMultipleFunctionsResponseDto>(`api/worker/${workerId}/functions/remove-multiple`, data);
  //   return response.data!;
  // }

  // // Knowledge Base Management
  // /**
  //  * Attach a knowledge base to a worker
  //  */
  // async attachKnowledgeBaseToWorker(workerId: string, data: AttachKnowledgeBaseToWorkerApiDto): Promise<AttachKnowledgeBaseResponseDto> {
  //   const response = await this.post<AttachKnowledgeBaseResponseDto>(`api/worker/${workerId}/knowledge-bases/attach`, data);
  //   return response.data!;
  // }

  // /**
  //  * Attach multiple knowledge bases to a worker
  //  */
  // async attachMultipleKnowledgeBasesToWorker(workerId: string, data: AttachMultipleKnowledgeBasesToWorkerApiDto): Promise<AttachMultipleKnowledgeBasesResponseDto> {
  //   const response = await this.post<AttachMultipleKnowledgeBasesResponseDto>(`api/worker/${workerId}/knowledge-bases/attach-multiple`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove a knowledge base from a worker
  //  */
  // async removeKnowledgeBaseFromWorker(workerId: string, data: RemoveKnowledgeBaseFromWorkerApiDto): Promise<RemoveKnowledgeBaseResponseDto> {
  //   const response = await this.post<RemoveKnowledgeBaseResponseDto>(`api/worker/${workerId}/knowledge-bases/remove`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove multiple knowledge bases from a worker
  //  */
  // async removeMultipleKnowledgeBasesFromWorker(workerId: string, data: RemoveMultipleKnowledgeBasesFromWorkerApiDto): Promise<RemoveMultipleKnowledgeBasesResponseDto> {
  //   const response = await this.post<RemoveMultipleKnowledgeBasesResponseDto>(`api/worker/${workerId}/knowledge-bases/remove-multiple`, data);
  //   return response.data!;
  // }

  // // Model Management
  // /**
  //  * Add a model to a worker
  //  */
  // async addModelToWorker(workerId: string, data: AddModelToWorkerApiDto): Promise<AddModelResponseDto> {
  //   const response = await this.post<AddModelResponseDto>(`api/worker/${workerId}/models/add`, data);
  //   return response.data!;
  // }

  // /**
  //  * Add multiple models to a worker
  //  */
  // async addMultipleModelsToWorker(workerId: string, data: AddMultipleModelsToWorkerApiDto): Promise<AddMultipleModelsResponseDto> {
  //   const response = await this.post<AddMultipleModelsResponseDto>(`api/worker/${workerId}/models/add-multiple`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove a model from a worker
  //  */
  // async removeModelFromWorker(workerId: string, data: RemoveModelFromWorkerApiDto): Promise<RemoveModelResponseDto> {
  //   const response = await this.post<RemoveModelResponseDto>(`api/worker/${workerId}/models/remove`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove multiple models from a worker
  //  */
  // async removeMultipleModelsFromWorker(workerId: string, data: RemoveMultipleModelsFromWorkerApiDto): Promise<RemoveMultipleModelsResponseDto> {
  //   const response = await this.post<RemoveMultipleModelsResponseDto>(`api/worker/${workerId}/models/remove-multiple`, data);
  //   return response.data!;
  // }

  // // Toolkit Management
  // /**
  //  * Attach a toolkit to a worker
  //  */
  // async attachToolkitToWorker(workerId: string, data: AttachToolkitToWorkerApiDto): Promise<AttachToolkitResponseDto> {
  //   const response = await this.post<AttachToolkitResponseDto>(`api/worker/${workerId}/toolkits/attach`, data);
  //   return response.data!;
  // }

  // /**
  //  * Attach multiple toolkits to a worker
  //  */
  // async attachMultipleToolkitsToWorker(workerId: string, data: AttachMultipleToolkitsToWorkerApiDto): Promise<AttachMultipleToolkitsResponseDto> {
  //   const response = await this.post<AttachMultipleToolkitsResponseDto>(`api/worker/${workerId}/toolkits/attach-multiple`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove a toolkit from a worker
  //  */
  // async removeToolkitFromWorker(workerId: string, data: RemoveToolkitFromWorkerApiDto): Promise<RemoveToolkitResponseDto> {
  //   const response = await this.post<RemoveToolkitResponseDto>(`api/worker/${workerId}/toolkits/remove`, data);
  //   return response.data!;
  // }

  // /**
  //  * Remove multiple toolkits from a worker
  //  */
  // async removeMultipleToolkitsFromWorker(workerId: string, data: RemoveMultipleToolkitsFromWorkerApiDto): Promise<RemoveMultipleToolkitsResponseDto> {
  //   const response = await this.post<RemoveMultipleToolkitsResponseDto>(`api/worker/${workerId}/toolkits/remove-multiple`, data);
  //   return response.data!;
  // }
} 