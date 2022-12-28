export class FailCreatingSessionError extends Error {
  public readonly name = 'FailCreatingSessionError'
  constructor() {
    super('The server failed attempting to create a session')
  }
}
export class SessionNotFoundError extends Error {
  public readonly name = 'SessionNotFoundError'
  constructor() {
    super('Session not found')
  }
}
