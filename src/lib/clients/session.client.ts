import { BaseClient } from '../base/base-client.js';
import { CreateSessionAndTaskRequest, CreateSessionAndTaskResponseDto, TaskApiDto } from '../types/index.js';
import { 
  CreateSessionApiDto, 
  GetSessionResponseDto, 
  UpdateSessionApiDto,
  UpdateSessionResponseDto,
  DeleteSessionResponseDto,
  ListSessionsResponseDto,
  AddMessageApiDto,
  AddMessageResponseDto,
  GetMessagesResponseDto, 
  SendMessageApiDto,
  SendMessageResponseDto,
  GetMessageResponseDto, 
  UpdateMessageResponseDto, 
  DeleteMessageResponseDto,
  SessionApiDto, 
  MessageApiDto
} from '../types/session.api.js';

/**
 * ByteEngine Session Client
 * Handles all session-related API operations
 */
export class ByteEngineSessionClient extends BaseClient {
    /**
     * Create a new session
     */
    async createSession(data: CreateSessionApiDto): Promise<GetSessionResponseDto> {
        return this.post<SessionApiDto>('api/session/create', data);
    }

    /**
     * Create a new session and task in one request
     */
    async createSessionAndTask(data: CreateSessionAndTaskRequest): Promise<CreateSessionAndTaskResponseDto> {
        return this.post<TaskApiDto>('api/session/create-with-task', data);
    }

    /**
     * Get a session by ID
     */
    async getSession(sessionId: string): Promise<GetSessionResponseDto> {
        return this.get<SessionApiDto>(`api/session/${sessionId}`);
    }

    /**
     * Update a session
     */
    async updateSession(sessionId: string, data: UpdateSessionApiDto): Promise<UpdateSessionResponseDto> {
        return this.put<SessionApiDto>(`api/session/${sessionId}`, data);
    }

    /**
     * Delete a session
     */
    async deleteSession(sessionId: string): Promise<DeleteSessionResponseDto> {
        return this.delete(`api/session/${sessionId}`);
    }

    /**
     * List all sessions
     */
    async listSessions(): Promise<ListSessionsResponseDto> {
        return this.get<SessionApiDto[]>('api/session/list');
    }

    /**
     * Add a message to a session
     */
    async addMessage(sessionId: string, data: AddMessageApiDto): Promise<AddMessageResponseDto> {
        return this.post(`api/session/${sessionId}/messages`, data);
    }

    /**
     * List messages in a session
     */
    async listMessages(sessionId: string): Promise<GetMessagesResponseDto> {
        return this.get<MessageApiDto[]>(`api/session/${sessionId}/messages`);
    }

    /**
     * Send a message to a session
     */
    async sendMessage(sessionId: string, data: SendMessageApiDto): Promise<SendMessageResponseDto> {
        return this.post<MessageApiDto>(`api/session/${sessionId}/messages`, data);
    }

    /**
     * Get a specific message in a session
     */
    async getMessage(sessionId: string, messageId: string): Promise<GetMessageResponseDto> {
        return this.get<MessageApiDto>(`api/session/${sessionId}/messages/${messageId}`);
    }

    /**
     * Update a message in a session
     */
    async updateMessage(sessionId: string, messageId: string, data: { content: string }): Promise<UpdateMessageResponseDto> {
       return this.put<MessageApiDto>(`api/session/${sessionId}/messages/${messageId}`, data);
    }

    /**
     * Delete a message from a session
     */
    async deleteMessage(sessionId: string, messageId: string): Promise<DeleteMessageResponseDto> {
        return this.delete(`api/session/${sessionId}/messages/${messageId}`);
    }

    /**
     * Parse a message content to extract string representation
     */
    parseMessage(message: MessageApiDto): string {
        if (typeof message.content === 'string') {
            return message.content;
        }
        
        if (Array.isArray(message.content)) {
            return message.content
                .map(content => {
                    if (content.type === 'text' && content.text) {
                        return content.text.value;
                    }
                    return '';
                })
                .filter(text => text && text.length > 0)
                .join('\n');
        }
        
        return '';
    }

    
} 