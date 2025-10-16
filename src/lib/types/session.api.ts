import { ApiResponse } from './api.interface.js';
import { ToolConfigs } from './toolkit.api.js';

// Session DTOs
export interface SessionApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  workerId: string;
  metadata?: Record<string, string>;
  toolConfigs?: ToolConfigs | null;
  messages?: MessageApiDto[];
}

// Request DTOs
export interface CreateSessionApiDto {
  workerId: string;
  messages?: AddMessageApiDto[];
  metadata?: Record<string, string>;
  toolConfigs?: ToolConfigs;
}

export interface MessageApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | MessageContent[];
  role: MessageRole;
  status: MessageStatus;
  sessionId: string;
  assistantId?: string | null;
  completedAt?: Date | null;
  incompleteAt?: Date | null;
  incompleteDetails?: MessageIncompleteType | null;
  attachments?: MessageAttachment[] | null;
  metadata?: Record<string, string>; // 16 key-value pairs max
}

export interface UpdateSessionApiDto {
  metadata?: Record<string, string>;
  toolConfigs?: ToolConfigs;
}

export interface AddMessageApiDto {
  content: MessageContent[] | string;
  role: MessageRole;
}

// Response DTOs
export interface CreateSessionResponseDto extends ApiResponse<SessionApiDto> {}

export interface GetSessionResponseDto extends ApiResponse<SessionApiDto> {}

export interface UpdateSessionResponseDto extends ApiResponse<SessionApiDto> {}

export interface DeleteSessionResponseDto extends ApiResponse<null> {}

export interface AddMessageResponseDto extends ApiResponse<null> {}

export interface GetMessagesResponseDto extends ApiResponse<MessageApiDto[]> {}

export interface GetMessageResponseDto extends ApiResponse<MessageApiDto> {}

export interface UpdateMessageResponseDto extends ApiResponse<MessageApiDto> {}

export interface DeleteMessageResponseDto extends ApiResponse<null> {}

export interface ListSessionsResponseDto extends ApiResponse<SessionApiDto[]> {}

export interface SendMessageApiDto {
  content: MessageContent[] | string;
  role: MessageRole;
}

export interface SendMessageResponseDto extends ApiResponse<MessageApiDto> {} 

export enum MessageRole {
  USER = 'user',
  ASSISTANT = 'assistant',
  SYSTEM = 'system',
  TOOL = 'tool'
}

export enum MessageStatus {
  IN_PROGRESS = 'in_progress',
  INCOMPLETE = 'incomplete',
  COMPLETED = 'completed'
}

export interface MessageAnnotation {
  type: MessageAnnotationType
  text: string
  file_citation?: {
      file_id: string
      quote: string
  }
  file_path?: {
      file_id: string
  }
  start_index: number
  end_index: number
}

export interface MessageContent {
  type: MessageContentType
  text?: {
      value: string
      annotations: MessageAnnotation[]
  }
  image_url?: {
      url: string
      detail?: ImageDetail
  }
}

export interface MessageAttachment {
  fileId: string
  tools: string[]
}

export enum MessageContentType {
  TEXT = 'text',
  IMAGE_URL = 'image_url'
}

export enum MessageAnnotationType {
  FILE_CITATION = 'file_citation',
  FILE_PATH = 'file_path'
}

export enum MessageIncompleteType {
  CONTENT_FILTER = 'content_filter',
  MAX_TOKENS = 'max_tokens',
  TASK_CANCELLED = 'task_cancelled',
  TASK_EXPIRED = 'task_expired',
  TASK_FAILED = 'task_failed'
}

export enum ImageDetail {
  LOW = 'low',
  HIGH = 'high',
  AUTO = 'auto'
}