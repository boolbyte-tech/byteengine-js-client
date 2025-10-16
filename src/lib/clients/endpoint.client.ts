// import { BaseClient } from '../base/base-client.js';
// import { ByteEngineTypes } from '../types/index.js';

// export class ByteEngineEndpointClient extends BaseClient {
//   /**
//    * List all endpoints
//    */
//   async listEndpoints(group?: 'system' | 'team'): Promise<ByteEngineTypes.GetEndpointsResponseDto> {
//     const params = group ? { group } : undefined;
//     return this.get<ByteEngineTypes.EndpointListApiDto[]>('api/endpoint/list', params);
//   }

//   /**
//    * Get an endpoint by ID
//    */
//   async getEndpoint(endpointId: string): Promise<ByteEngineTypes.GetEndpointResponseDto> {
//     return this.get<ByteEngineTypes.EndpointApiDto>(`api/endpoint/${endpointId}`);
//   }

//   /**
//    * Create a new endpoint
//    */
//   async createEndpoint(data: ByteEngineTypes.CreateEndpointApiDto): Promise<ByteEngineTypes.CreateEndpointResponseDto> {
//     return this.post<ByteEngineTypes.EndpointApiDto>('api/endpoint/create', data);
//   }

//   /**
//    * Update an endpoint
//    */
//     async updateEndpoint(endpointId: string, data: ByteEngineTypes.UpdateEndpointApiDto): Promise<ByteEngineTypes.UpdateEndpointResponseDto> {
//     return this.put<ByteEngineTypes.EndpointApiDto>(`api/endpoint/${endpointId}`, data);
//   }
// } 