import { Session } from '../../entities/Session/Session'
import { SessionNotFoundError } from './errors'

export interface SessionRepositoryInterface {
  create(attendantId: string, expiresAt: Date): Promise<Session | Error>
  get(sessionId: string): Promise<Session | SessionNotFoundError>
}
