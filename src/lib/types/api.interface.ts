// Base API Response interface
export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    total?: number;
    firstId?: string;
    lastId?: string;
    hasMore?: boolean;
  }
  
  // Base Client Configuration
  export interface BaseClientConfig {
    baseUrl?: string;
    apiKey: string;
    timeout?: number;
  }
  
  // HTTP Methods
  export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  
  // Request Options
  export interface RequestOptions {
    method: HttpMethod;
    url: string;
    headers?: Record<string, string>;
    body?: any;
    timeout?: number;
  }
  
  // Response Types
  export interface ApiError {
    message: string;
    status?: number;
    code?: string;
  }
  
  // Pagination
  export interface PaginationParams {
    after?: string;
    limit?: number;
    order?: 'asc' | 'desc';
  }
  
  // Paginated Response
  export interface PaginatedResponse<T> {
    data: T[];
    firstId?: string;
    lastId?: string;
    hasMore: boolean;
  }
  
  // File Upload
  export interface FileUpload {
    buffer: Buffer;
    originalname: string;
    mimetype: string;
  }
  
  // Common Entity Fields
  export interface BaseEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Common List Response
  export interface ListResponse<T> {
    data: T[];
    total: number;
    hasMore?: boolean;
  }