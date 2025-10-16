import { ApiResponse } from './api.interface.js';
import { ToolConfigs } from './toolkit.api.js';

// AI-related enums
export enum TaskStatus {
    QUEUED = 'queued',
    IN_PROGRESS = 'in_progress',
    REQUIRES_ACTION = 'requires_action',
    CANCELLING = 'cancelling',
    CANCELLED = 'cancelled',
    FAILED = 'failed',
    COMPLETED = 'completed',
    INCOMPLETE = 'incomplete',
    EXPIRED = 'expired'
}

export enum ToolChoice {
    NONE = 'none',
    AUTO = 'auto',
    REQUIRED = 'required'
}

export enum ResponseFormat {
    AUTO = 'auto',
    TEXT = 'text',
    JSON_OBJECT = 'json_object',
    JSON_SCHEMA = 'json_schema'
}

export enum ReasoningEffort {
    NONE = 'none',
    AUTO = 'auto',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

export enum ErrorCode {
    INVALID_REQUEST = 'invalid_request',
    RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
    QUOTA_EXCEEDED = 'quota_exceeded',
    BILLING_NOT_ACTIVE = 'billing_not_active',
    MODEL_NOT_FOUND = 'model_not_found',
    WORKER_NOT_FOUND = 'worker_not_found',
    STREAM_NOT_FOUND = 'stream_not_found',
    TASK_NOT_FOUND = 'task_not_found',
    TASK_ALREADY_RUNNING = 'task_already_running',
    TASK_ALREADY_COMPLETED = 'task_already_completed',
    TASK_ALREADY_CANCELLED = 'task_already_cancelled',
    TASK_ALREADY_EXPIRED = 'task_already_expired',
    TASK_ALREADY_FAILED = 'task_already_failed',
    TOOL_CALLS_REQUIRED = 'tool_calls_required',
    TOOL_CALLS_PARALLEL_REQUIRED = 'tool_calls_parallel_required',
    TOOL_CALLS_PARALLEL_REJECTED = 'tool_calls_parallel_rejected',
    TOOL_CALLS_REJECTED = 'tool_calls_rejected',
    TOOL_CALLS_REQUIRED_TOOL_CALL = 'tool_calls_required_tool_call',
    TOOL_CALLS_REQUIRED_TOOL_CALL_PARALLEL = 'tool_calls_required_tool_call_parallel',
    TOOL_CALLS_REQUIRED_TOOL_CALL_PARALLEL_REJECTED = 'tool_calls_required_tool_call_parallel_rejected',
    TOOL_CALLS_REQUIRED_TOOL_CALL_REJECTED = 'tool_calls_required_tool_call_rejected',
    TOOL_CALLS_REQUIRED_TOOL_CALL_TOOL_CALL = 'tool_calls_required_tool_call_tool_call',
    TOOL_CALLS_REQUIRED_TOOL_CALL_TOOL_CALL_PARALLEL = 'tool_calls_required_tool_call_tool_call_parallel',
    TOOL_CALLS_REQUIRED_TOOL_CALL_TOOL_CALL_PARALLEL_REJECTED = 'tool_calls_required_tool_call_tool_call_parallel_rejected',
    TOOL_CALLS_REQUIRED_TOOL_CALL_TOOL_CALL_REJECTED = 'tool_calls_required_tool_call_tool_call_rejected'
}

export enum IncompleteReason {
    MAX_COMPLETION_TOKENS = 'max_completion_tokens',
    MAX_PROMPT_TOKENS = 'max_prompt_tokens'
}

export interface ToolOutput {
    toolCallId: string
    output: string
}

export interface ToolCall {
    toolCallId: string
    toolName: string
    args: Record<string, any>
}

// Task DTOs
export interface TaskApiDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  workerId: string;
  sessionId: string;
  endpointId?: string;
  status: TaskStatus;
  state?: any; // AgentState
  additionalInstructions?: string;
  completedAt?: Date;
  log?: string[];
  metadata?: Record<string, any>[];
  
  startedAt?: Date;
  expiresAt?: Date;
  cancelledAt?: Date;
  failedAt?: Date;
  lastError?: {
    code: ErrorCode;
    message: string;
  };
  model?: string;
  instructions?: string;
  incompleteDetails?: {
    reason: IncompleteReason;
  };
  tools?: any[];
  toolConfigs?: ToolConfigs;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  temperature?: number;
  topP?: number;
  maxPromptTokens?: number;
  maxCompletionTokens?: number;
  truncationStrategy?: any;
  responseFormat?: ResponseFormat;
  toolChoice?: ToolChoice;
  parallelToolCalls?: boolean;
  requiredAction?: any;
  reasoningEffort?: ReasoningEffort;
  additionalMessages?: any[];
  toolOutputs?: ToolOutput[];
  toolCalls?: ToolCall[];
}

// Request DTOs
export interface CreateTaskRequest {
  sessionId?: string;
  model?: string;
  instructions?: string;
  additionalMessages?: any[];
  tools?: any[];
  toolConfigs?: ToolConfigs;
  metadata?: Record<string, string>;
  temperature?: number;
  topP?: number;
  maxPromptTokens?: number;
  maxCompletionTokens?: number;
  truncationStrategy?: any;
  responseFormat?: ResponseFormat;
  toolChoice?: ToolChoice;
  parallelToolCalls?: boolean;
  reasoningEffort?: ReasoningEffort;
  streamOptions?: any;
}

export interface CreateSessionAndTaskRequest {
  workerId: string;
  messages?: any[];
  metadata?: Record<string, string>;
  task: CreateTaskRequest;
}

export interface UpdateTaskRequest {
  metadata?: Record<string, string>;
}

export interface SubmitToolOutputsRequest {
  toolOutputs: ToolOutput[]
}

// Response DTOs
export interface CreateTaskResponseDto extends ApiResponse<TaskApiDto> {}

export interface CreateSessionAndTaskResponseDto extends ApiResponse<TaskApiDto> {}

export interface GetTaskResponseDto extends ApiResponse<TaskApiDto> {}

export interface ListTasksResponseDto extends ApiResponse<TaskApiDto[]> {}

export interface UpdateTaskResponseDto extends ApiResponse<TaskApiDto> {}

export interface SubmitToolOutputsResponseDto extends ApiResponse<TaskApiDto> {}

export interface CancelTaskResponseDto extends ApiResponse<TaskApiDto> {} 

export interface ResumeTaskResponseDto extends ApiResponse<TaskApiDto> {}