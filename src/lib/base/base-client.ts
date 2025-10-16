import { BaseClientConfig, RequestOptions, ApiResponse } from '../types/index.js';

export abstract class BaseClient {
  protected config: BaseClientConfig;

  constructor(config: BaseClientConfig) {
    this.config = config;
  }

  /**
   * Make an HTTP request to the ByteEngine API
   */
  protected async request<T = any>(options: RequestOptions): Promise<ApiResponse<T>> {
    const { method, url, headers = {}, body, timeout = this.config.timeout } = options;

    const requestHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.apiKey}`,
      ...headers
    };

    const requestOptions: RequestInit = {
      method,
      headers: requestHeaders,
      signal: timeout ? AbortSignal.timeout(timeout) : undefined
    };

    if (body && method !== 'GET') {
      requestOptions.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    const fullUrl = `${this.config.baseUrl}/${url}`.replace(/([^:]\/)\/+/g, '$1');

    try {
      const response = await fetch(fullUrl, requestOptions);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as any;
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data as ApiResponse<T>;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`ByteEngine API Error: ${error.message}`);
      }
      throw new Error('Unknown error occurred');
    }
  }

  /**
   * Make a GET request
   */
  protected async get<T = any>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request<T>({
      method: 'GET',
      url: `${url}${queryString}`
    });
  }

  /**
   * Make a POST request
   */
  protected async post<T = any>(url: string, body?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      body
    });
  }

  /**
   * Make a PUT request
   */
  protected async put<T = any>(url: string, body?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      body
    });
  }

  /**
   * Make a DELETE request
   */
  protected async delete<T = any>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      url
    });
  }

  /**
   * Upload a file using FormData
   */
  protected async uploadFile<T = any>(url: string, file: File, additionalData?: Record<string, any>): Promise<ApiResponse<T>> {
    const formData = new FormData();
    formData.append('file', file);

    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, typeof value === 'string' ? value : JSON.stringify(value));
      });
    }

    const requestHeaders = {
      'Authorization': `Bearer ${this.config.apiKey}`
    };

    const fullUrl = `${this.config.baseUrl}/${url}`.replace(/([^:]\/)\/+/g, '$1');

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: requestHeaders,
        body: formData,
        signal: this.config.timeout ? AbortSignal.timeout(this.config.timeout) : undefined
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as any;
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return data as ApiResponse<T>;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`ByteEngine API Error: ${error.message}`);
      }
      throw new Error('Unknown error occurred');
    }
  }
} 