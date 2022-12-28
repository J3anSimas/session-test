export class Session {
  constructor(
    public id: string,
    public attendantId: string,
    public expiresAt: Date
  ) {}
  getId() {
    return this.id
  }
  getAttendantId() {
    return this.attendantId
  }
  getExpiresAt() {
    return this.expiresAt
  }
}
