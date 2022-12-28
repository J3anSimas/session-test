import type { AttendantRepositoryInterface } from '../../contracts/AttendantRepository/AttendantRepositoryInterface'
import type {
  UsernameAlreadyTakenError
} from '../../contracts/AttendantRepository/errors';
import {
  AttendantNotFoundError
} from '../../contracts/AttendantRepository/errors'
import type { PasswordEncoder } from '../../contracts/PasswordEncoder'
import type { AttendantData } from '../../entities/Attendant/Attendant';
import { Attendant } from '../../entities/Attendant/Attendant'
import { Authentication } from './AuthenticateUser'
import type { AuthenticationResult } from './ports/AuthenticateUserDefs'
import { SessionRepositoryInterface } from '../../contracts/SessionRepository/SessionRepositoryInterface'
import { Session } from '../../entities/Session/Session'
import { SessionNotFoundError } from '../../contracts/SessionRepository/errors'

class AttendantRepositorySpy implements AttendantRepositoryInterface {
  constructor(private readonly found: boolean) {}
  create(
    attendantData: AttendantData
  ): Promise<Attendant | UsernameAlreadyTakenError | Error> {
    throw new Error('Method not implemented.')
  }
  getUserFromUsername(username: string): Promise<Attendant> {
    if (!this.found) throw new AttendantNotFoundError()
    return Promise.resolve(
      new Attendant('idstring', 'Jean Simas', 'jeansimas', 'senha123', '')
    )
  }
}
class PasswordEncoderSpy implements PasswordEncoder {
  constructor(private readonly wrong: boolean) {}
  encode(password: string): string {
    throw new Error('Method not implemented.')
  }
  compare(password: string, hashedPassword: string): boolean {
    return !this.wrong
  }
}

const makeSuit = ({
  found,
  wrong
}: {
  found: boolean
  wrong: boolean
}): { authentication: Authentication } => {
  const authentication = new Authentication(
    new AttendantRepositorySpy(found),
    new PasswordEncoderSpy(wrong)
  )
  return { authentication }
}

describe('Authenticate User', () => {
  it('should return attendant if credentials are correctly', async () => {
    const { authentication } = makeSuit({ found: true, wrong: false })
    const response = (await authentication.handle({
      username: 'jeansimas',
      password: 'senha123'
    })) as AuthenticationResult
    expect(response.attendant).toBeInstanceOf(Attendant)
    
  })

  it('should return AttendantNotFound Error if username dont exist', async () => {
    const { authentication } = makeSuit({ found: false, wrong: false })
    const response = (await authentication.handle({
      username: 'j3ansimas',
      password: 'senha123'
    })) as Error
    expect(response.name).toBe('AttendantNotFoundError')
  })

  it('should return WrongCredentials Error if passwords dont match', async () => {
    const { authentication } = makeSuit({ found: true, wrong: true })

    const response = (await authentication.handle({
      username: 'j3ansimas',
      password: 'senha123'
    })) as Error
    expect(response.name).toBe('WrongCredentialsError')
  })
})
