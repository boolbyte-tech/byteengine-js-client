import { ApiResponse } from './api.interface.js';

// ByteFhir DTOs
export interface FhirServerDto {
  id: string;
  teamId: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  region: ByteFhirRegion;
  fhirVersion: FhirVersion;
  status: ByteFhirStatus;
  infrastructure: ByteFhirTypes;
  endpoint?: string;
  apiKey?: string;
}

// Request DTOs
export interface CreateFhirDto {
  name: string;
  region: ByteFhirRegion;
  fhirVersion: FhirVersion;
  type: ByteFhirTypes;
}

// Response DTOs
export interface CreateFhirResponseDto extends ApiResponse<FhirServerDto> {}

export interface GetFhirResponseDto extends ApiResponse<FhirServerDto[]> {} 

export enum ByteFhirTypes {
  SERVERLESS = 'serverless',
  DEDICATED = 'dedicated',
}

export enum ByteFhirStatus {
  PENDING = 'pending',
  PROVISIONING = 'provisioning',
  RUNNING = 'running',
  STOPPING = 'stopping',
  STOPPED = 'stopped',
  DELETING = 'deleting',
  DELETED = 'deleted',
  FAILED = 'failed',
  UNKNOWN = 'unknown'
}

export enum ByteFhirRegion {
  GLOBAL = 'global',
}

export enum FhirVersion {
  R4 = 'R4'
}
