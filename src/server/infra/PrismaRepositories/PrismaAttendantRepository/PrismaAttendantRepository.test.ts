import { prisma } from '../../../db/client'
import { AttendantNotFoundError } from '../../../contracts/AttendantRepository/errors'
import type { Attendant, AttendantData } from '../../../entities/Attendant/Attendant'
import { PrismaAttendantRepository } from './PrismaAttendantRepository'

describe('Prisma Attendant Repository', () => {
  beforeEach(async () => {
    await prisma.attendant.deleteMany()
  })
  afterEach(async () => {
    await prisma.attendant.deleteMany()
  })

  it('should create attendant on database and return new Attendant', async () => {
    const attendantData: AttendantData = {
      fullname: 'Jean da Silva Simas',
      username: 'usernameToTestCreationOfAttendant',
      password: 'password'
    }
    const attendantRepository = new PrismaAttendantRepository()
    const attendantCreated = (await attendantRepository.create(
      attendantData
    )) as Attendant
    const attendant = (await attendantRepository.getUserFromUsername(
      attendantData.username
    )) as Attendant
    expect(attendant.getUsername()).toBe(attendantData.username)
    expect(attendantCreated.getId()).toBe(attendant.getId())
  })

  it('should return UsernameAlreadyTakenError if username already exists on database', async () => {
    const attendantData: AttendantData = {
      fullname: 'Jean da Silva Simas',
      username: 'usernameToTestIfUsernameAlreadyWasTaken',
      password: 'password'
    }
    const attendantRepository = new PrismaAttendantRepository()
    await attendantRepository.create(attendantData)
    const response = (await attendantRepository.create(attendantData)) as Error
    expect(response.name).toBe('UsernameAlreadyTakenError')
  })

  it('should get the Attendant from database if username matches any', async () => {
    const attendantData: AttendantData = {
      username: 'usernameToTestGetAttendantByUsername',
      fullname: 'Jean da Silva Simas',
      password: '1234567890'
    }

    const attendantRepository = new PrismaAttendantRepository()
    await attendantRepository.create(attendantData)
    const attendant = (await attendantRepository.getUserFromUsername(
      attendantData.username
    )) as Attendant

    expect(attendant.getUsername()).toBe(attendantData.username)
  })
  it('should return AttendantNotFoundError if there is no Attendant with given username', async () => {
    const attendantData: AttendantData = {
      username: 'usernameToTestGetAttendantByUsername',
      fullname: 'Jean da Silva Simas',
      password: '1234567890'
    }

    const attendantRepository = new PrismaAttendantRepository()
    await attendantRepository.create(attendantData)
    const response = await attendantRepository.getUserFromUsername(
      attendantData.username + '123'
    )

    expect(response).toStrictEqual(new AttendantNotFoundError())
  })
})
