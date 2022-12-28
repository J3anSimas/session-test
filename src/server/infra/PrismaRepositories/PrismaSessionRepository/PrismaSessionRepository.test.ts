import { SessionNotFoundError } from '../../../contracts/SessionRepository/errors'
import { prisma } from '../../../db/client'
import type { Attendant } from '../../../entities/Attendant/Attendant'
import { Session } from '../../../entities/Session/Session'
import { PrismaAttendantRepository } from '../PrismaAttendantRepository/PrismaAttendantRepository'
import { PrismaSessionRepository } from './PrismaSessionRepository'

describe('Prisma Session Repository', () => {
  beforeEach(async () => {
    await prisma.session.deleteMany()
  })
  afterEach(async () => {
    await prisma.session.deleteMany()
  })
  // it('should create a session on database and return its Id', async () => {
  //   await prisma.attendant.deleteMany()
  //   const attendantRepository = new PrismaAttendantRepository()
  //   const attendant = (await attendantRepository.create({
  //     fullname: 'Name to test',
  //     username: 'username to test',
  //     password: 'etsetsges'
  //   })) as Attendant

  //   const sessionRepository = new PrismaSessionRepository()
  //   const expiresAt = new Date()
  //   expiresAt.setDate(expiresAt.getDate() + 1)
  //   const createdSession = (await sessionRepository.create(
  //     attendant.getId(),
  //     expiresAt
  //   )) as Session
  //   const session = await prisma.session.findUnique({
  //     where: { id: createdSession.getId() }
  //   })

  //   expect(createdSession).toBeInstanceOf(Session)
  //   expect(session?.attendantId).toBe(attendant.getId())
  //   await prisma.attendant.delete({
  //     where: { username: attendant.getUsername() }
  //   })
  // })
  // it('should retrieve session if it exists on database', async () => {
  //   const attendantRepository = new PrismaAttendantRepository()
  //   const attendant = (await attendantRepository.create({
  //     fullname: 'Name to test',
  //     username: 'username to test retrieve session',
  //     password: 'etsetsges'
  //   })) as Attendant

  //   const sessionRepository = new PrismaSessionRepository()
  //   const expiresAt = new Date()
  //   expiresAt.setDate(expiresAt.getDate() + 1)
  //   console.log(attendant)

  //   const createdSession = (await sessionRepository.create(
  //     attendant.getId(),
  //     expiresAt
  //   )) as Session
  //   const response = await sessionRepository.get(createdSession.getId())
  //   expect(response instanceof Session).toBe(true)
  //   await prisma.attendant.delete({
  //     where: { username: attendant.getUsername() }
  //   })
  // })
  // it('should return SessionNotFoundError if session does not exist on database', async () => {
  //   const sessionRepository = new PrismaSessionRepository()
  //   const response = await sessionRepository.get('session that does not exist')
  //   expect(response).toStrictEqual(new SessionNotFoundError())
  // })

  test.todo('')
})
