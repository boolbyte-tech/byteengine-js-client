import { BaseClient } from '../base/base-client';
import { 
  GetFhirResponseDto, 
  FhirServerDto, 
  CreateFhirResponseDto, 
  CreateFhirDto 
} from '../types/bytefhir.api';

export class ByteEngineByteFhirClient extends BaseClient {
  /**
   * List all FHIR servers
   */
  async listFhirServers(): Promise<GetFhirResponseDto> {
    return this.get<FhirServerDto[]>('api/fhirserver/list');
  }

  /**
   * Get a FHIR server by ID
   */
  async getFhirServer(serverId: string): Promise<CreateFhirResponseDto> {
    return this.get<FhirServerDto>(`api/fhirserver/${serverId}`);
  }

  /**
   * Create a new FHIR server
   */
  async createFhirServer(data: CreateFhirDto): Promise<CreateFhirResponseDto> {
    return this.post<FhirServerDto>('api/fhirserver/create', data);
  }
} 