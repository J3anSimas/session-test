import bcrypt from 'bcryptjs'
import { PasswordEncoder } from '../../contracts/PasswordEncoder'

export class BcryptPasswordEncoder implements PasswordEncoder {
  encode(password: string): string {
    const hashedPassword = bcrypt.hashSync(password, 12)

    return hashedPassword
  }
  compare(password: string, hashedPassword: string): boolean {
    return bcrypt.compareSync(password, hashedPassword)
  }
}
