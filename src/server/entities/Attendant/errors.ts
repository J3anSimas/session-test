export class AttendantNotFoundError extends Error {
  public readonly name = 'AttendantNotFoundError'
  constructor() {
    super('Attendant not found')
  }
}
