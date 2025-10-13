import { BaseClient } from '../base/base-client';
import { 
  GetFhirResponseDto, 
  FhirServerDto, 
  CreateFhirResponseDto, 
  CreateFhirDto 
} from '../types/bytefhir.api';
import Client from 'fhir-kit-client';

export class ByteEngineDataStoreClient extends BaseClient {
  private fhirClient: Client | null = null;

  /**
   * List all FHIR servers
   */
  async listFhirStores(): Promise<GetFhirResponseDto> {
    return this.get<FhirServerDto[]>('api/fhirserver/list');
  }

  /**
   * Get a FHIR server by ID
   */
  async getFhirStore(serverId: string): Promise<CreateFhirResponseDto> {
    return this.get<FhirServerDto>(`api/fhirserver/${serverId}`);
  }

  /**
   * Create a new FHIR server
   */
  async createFhirStore(data: CreateFhirDto): Promise<CreateFhirResponseDto> {
    return this.post<FhirServerDto>('api/fhirserver/create', data);
  }

  /**
   * Initialize FHIR client for a specific server
   */
  async initializeFhirStoreClient(serverId: string): Promise<void> {
    const server = await this.getFhirStore(serverId);
    if (server.data?.endpoint) {
      this.fhirClient = new Client({
        baseUrl: server.data.endpoint,
        customHeaders: server.data.apiKey ? {
          'Authorization': `Bearer ${server.data.apiKey}`
        } : undefined
      });
    } else {
      throw new Error('FHIR server endpoint not found');
    }
  }

  /**
   * Get the FHIR client instance - this gives direct access to all fhir-kit-client methods
   */
  getFhirStoreClient(): Client | null {
    return this.fhirClient;
  }
} 