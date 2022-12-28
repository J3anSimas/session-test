import type { AttendantRepositoryInterface } from '../../contracts/AttendantRepository/AttendantRepositoryInterface'
import { AttendantNotFoundError } from '../../contracts/AttendantRepository/errors'
import type { PasswordEncoder } from '../../contracts/PasswordEncoder'
import { TokenManagerInterface } from '../../contracts/TokenManager/TokenManager'
import { Attendant } from '../../entities/Attendant/Attendant'
import { SessionRepositoryInterface } from '../../contracts/SessionRepository/SessionRepositoryInterface'
import { WrongCredentialsError } from './errors'
import type {
  AuthenticationInterface,
  AuthenticationParams,
  AuthenticationResult
} from './ports/AuthenticateUserDefs'
import type { FailCreatingSessionError } from '../../contracts/SessionRepository/errors'

export class Authentication implements AuthenticationInterface {
  constructor(
    private readonly attendantRepository: AttendantRepositoryInterface,
    private readonly passwordEncoder: PasswordEncoder
  ) {}
  async handle(
    authParams: AuthenticationParams
  ): Promise<
    | AuthenticationResult
    | AttendantNotFoundError
    | WrongCredentialsError
    | FailCreatingSessionError
  > {
    try {
      const attendant = await this.attendantRepository.getUserFromUsername(
        authParams.username
      )
      if (attendant instanceof AttendantNotFoundError)
        return new AttendantNotFoundError()

      const isPasswordsMatch = this.passwordEncoder.compare(
        authParams.password,
        attendant.getPassword()
      )

      if (!isPasswordsMatch) return new WrongCredentialsError()
      return Promise.resolve({ attendant })
    } catch (error) {
      return new AttendantNotFoundError()
    }
  }
}
