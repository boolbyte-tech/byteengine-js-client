import { ApiResponse } from './api.interface.js';

// Storage-related enums for better type safety and consistency
export enum StorageObjectType {
  STORAGE = 'storage',
  STORAGE_FILE = 'storage.file',
  STORAGE_FILE_DELETED = 'storage.file.deleted',
}

// File sources (who/what created the file)
export enum FileSource {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
}

// Storage/Container status
export enum StorageStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ARCHIVED = 'archived',
}

// Sort order for listings
export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

// Storage interfaces
export interface Storage {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  object: StorageObjectType.STORAGE;
  status: StorageStatus;
  description?: string;
}

export interface FileMetadata {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  bucket: string;
  storageId: string;
  tags?: Record<string, string>;
  teamId: string;
  version?: string;
  checksum?: string;
  isPublic?: boolean;
  bytes: number; // Size in bytes (alias for size)
  object: StorageObjectType.STORAGE_FILE; // Type identifier like "storage.file"
  source: FileSource; // Source of the file (user, assistant, system)
}

export interface FileUploadResult {
  file: FileMetadata;
  url?: string;
  uploadId?: string;
  object: StorageObjectType.STORAGE_FILE; // Type identifier
  bytes: number; // Size in bytes
  path: string; // File path
  source: FileSource; // Source of the file
}

// Storage/Container DTOs
export interface StorageDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  object: StorageObjectType.STORAGE;
  status: StorageStatus;
  description?: string;
}

export interface StorageFileDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  originalName: string;
  size: number;
  bytes: number; // Alias for size
  tags?: Record<string, any>;
  contentType: string;
  uploadedAt: Date;
  object: StorageObjectType.STORAGE_FILE;
  source: FileSource;

  path: string; // File path in container
}

export interface StorageFilesListDto {
  files: StorageFileDto[];
  total: number;
  hasMore: boolean;
  storage: StorageDto;
  firstId?: string;
  lastId?: string;
}

// New OpenAI-style response DTOs


export interface ContainerFileDeletedResponseDto {
  id: string;
  object: StorageObjectType.STORAGE_FILE_DELETED;
  deleted: boolean;
}

export interface FileContentResponseDto {
  content: string | Buffer;
  contentType: string;
  contentLength: number;
}

// Request DTOs
export interface CreateStorageApiDto {
  name: string;
  description?: string;
}

export interface ListStorageFilesDto {
  limit?: number;
  offset?: number;
  after?: string; // Cursor for pagination
  order?: SortOrder; // Sort order
}

export interface UploadFileApiDto {
  tags?: string; // JSON string
  source?: FileSource;
  path?: string; // Custom path within container
}

// Response DTOs
export interface CreateStorageResponseDto extends ApiResponse<StorageDto> {}

export interface ListStoragesResponseDto extends ApiResponse<StorageDto[]> {}

export interface ListStorageFilesResponseDto extends ApiResponse<StorageFileDto[]> {}

export interface UploadFileResponseDto extends ApiResponse<StorageFileDto> {}

export interface GetFileContentResponseDto extends ApiResponse<FileContentResponseDto> {}

export interface DeleteFileResponseDto extends ApiResponse<null> {} 