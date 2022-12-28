import type { FailCreatingSessionError } from '../../../contracts/SessionRepository/errors'
import type { Attendant } from '../../../entities/Attendant/Attendant'
import type { AttendantNotFoundError } from '../../../entities/Attendant/errors'
import type { WrongCredentialsError } from '../errors'

export interface AuthenticationInterface {
  handle(
    authParams: AuthenticationParams
  ): Promise<
    | AuthenticationResult
    | AttendantNotFoundError
    | WrongCredentialsError
    | FailCreatingSessionError
  >
}

export type AuthenticationParams = {
  username: string
  password: string
}
export type AuthenticationResult = {
  attendant: Attendant
}
