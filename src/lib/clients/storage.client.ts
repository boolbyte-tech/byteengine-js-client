import { BaseClient } from '../base/base-client';
import { 
  CreateStorageApiDto, 
  CreateStorageResponseDto, 
  ListStoragesResponseDto, 
  ListStorageFilesDto, 
  ListStorageFilesResponseDto, 
  UploadFileApiDto, 
  UploadFileResponseDto, 
  StorageDto, 
  StorageFileDto 
} from '../types/storage.api';

export class ByteEngineStorageClient extends BaseClient {
  /**
   * Create a new storage
   */
  async createStorage(data: CreateStorageApiDto): Promise<CreateStorageResponseDto> {
    return this.post<StorageDto>('api/storage/create', data);
  }

  /**
   * List all storages
   */
  async listStorages(): Promise<ListStoragesResponseDto> {
    return this.get<StorageDto[]>('api/storage/list');
  }

  /**
   * List files in a storage
   */
  async listStorageFiles(storageId: string, params?: ListStorageFilesDto): Promise<ListStorageFilesResponseDto> {
    return this.get<StorageFileDto[]>(`api/storage/${storageId}/files`, params);
  }

  /**
   * Upload a file to storage
   */
  async uploadFileToStorage(storageId: string, file: File, data?: UploadFileApiDto): Promise<UploadFileResponseDto> {
    return this.uploadFile<StorageFileDto>(`api/storage/${storageId}/upload`, file, data);
  }
} 