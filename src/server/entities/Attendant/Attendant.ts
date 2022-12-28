export class Attendant {
  constructor(
    public id: string,
    public fullname: string,
    public username: string,
    public password: string,
    public image: string
  ) {}

  getId() {
    return this.id
  }
  getUsername() {
    return this.username
  }
  getPassword() {
    return this.password
  }
}

export type AttendantData = {
  fullname: string
  username: string
  password: string
}
