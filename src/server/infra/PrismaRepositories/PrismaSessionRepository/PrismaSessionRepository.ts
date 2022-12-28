import { prisma } from '../../../db/client'
import {
  FailCreatingSessionError,
  SessionNotFoundError
} from '../../../contracts/SessionRepository/errors'
import { SessionRepositoryInterface } from '../../../contracts/SessionRepository/SessionRepositoryInterface'
import { Session } from '../../../entities/Session/Session'

export class PrismaSessionRepository implements SessionRepositoryInterface {
  async get(sessionId: string): Promise<Session | SessionNotFoundError> {
    const dataFromDatabase = await prisma.session.findUnique({
      where: { id: sessionId }
    })
    if (dataFromDatabase === null) return new SessionNotFoundError()
    return new Session(
      dataFromDatabase.id,
      dataFromDatabase.attendantId,
      dataFromDatabase.expiresAt
    )
  }
  async create(idAttendant: string, expiresAt: Date): Promise<Session | Error> {
    try {
      const dataFromDatabase = await prisma.session.create({
        data: { attendantId: idAttendant, expiresAt: expiresAt }
      })
      const session = new Session(
        dataFromDatabase.id,
        dataFromDatabase.attendantId,
        dataFromDatabase.expiresAt
      )

      return session
    } catch (error) {
      return new FailCreatingSessionError()
    }
  }
}
