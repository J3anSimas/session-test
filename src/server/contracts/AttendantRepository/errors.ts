export class AttendantNotFoundError extends Error {
  public readonly name = 'AttendantNotFoundError'
  constructor() {
    super('Attendant not found.')
  }
}

export class UsernameAlreadyTakenError extends Error {
  public readonly name = 'UsernameAlreadyTakenError'
  constructor() {
    super('Username already taken')
  }
}
