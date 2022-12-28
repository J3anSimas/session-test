import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { prisma } from '../../../db/client'
import type { AttendantRepositoryInterface } from '../../../contracts/AttendantRepository/AttendantRepositoryInterface'
import {
  AttendantNotFoundError,
  UsernameAlreadyTakenError
} from '../../../contracts/AttendantRepository/errors'
import type { AttendantData } from '../../../entities/Attendant/Attendant';
import { Attendant } from '../../../entities/Attendant/Attendant'

export class PrismaAttendantRepository implements AttendantRepositoryInterface {
  async create(
    attendantData: AttendantData
  ): Promise<Attendant | UsernameAlreadyTakenError | Error> {
    try {
      const dataFromDatabase = await prisma.attendant.create({
        data: attendantData
      })
      const attendant = new Attendant(
        dataFromDatabase.id,
        dataFromDatabase.fullname,
        dataFromDatabase.username,
        dataFromDatabase.password,
        dataFromDatabase.image ?? ''
      )
      return attendant
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return new UsernameAlreadyTakenError()
      }
      return new Error(String(error))
    }
  }
  async getUserFromUsername(
    username: string
  ): Promise<Attendant | AttendantNotFoundError> {
    const queryResult = await prisma.attendant.findUnique({
      where: { username }
    })
    if (queryResult === null) return new AttendantNotFoundError()

    const { id, fullname, username: userName, password, image } = queryResult
    return new Attendant(id, fullname, userName, password, image ?? '')
  }
}
