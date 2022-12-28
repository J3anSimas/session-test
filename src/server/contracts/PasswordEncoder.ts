export interface PasswordEncoder {
  encode(password: string): string
  compare(password: string, hashedPassword: string): boolean
}
