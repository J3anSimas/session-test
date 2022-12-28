import { Attendant, AttendantData } from '../../entities/Attendant/Attendant'
import { AttendantNotFoundError, UsernameAlreadyTakenError } from './errors'

export interface AttendantRepositoryInterface {
  create(
    attendantData: AttendantData
  ): Promise<Attendant | UsernameAlreadyTakenError | Error>
  getUserFromUsername(
    username: string
  ): Promise<Attendant | AttendantNotFoundError>
}
