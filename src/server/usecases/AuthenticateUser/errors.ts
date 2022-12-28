export class WrongCredentialsError extends Error {
  public readonly name = 'WrongCredentialsError'
  constructor() {
    super('Wrong credentials.')
  }
}
