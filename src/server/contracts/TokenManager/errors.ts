export class InvalidJWTSecretError extends Error {
  public readonly name = 'InvalidJWTSecretError'
  constructor() {
    super('Wrong secret inserted')
  }
}
