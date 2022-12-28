import { it } from '@jest/globals'
import { BcryptPasswordEncoder } from './BcryptPasswordEncoder'

describe('Bcrypt Password Encoder', () => {
  it('should return password encoded as string', () => {
    const bcryptPasswordEncode = new BcryptPasswordEncoder()
    const password = 'senha123'
    const response = bcryptPasswordEncode.encode(password)
    expect(response).not.toBe(password)
  })
  it('should return true from comparison between correct hashedPassword and password', async () => {
    const bcryptPasswordEncode = new BcryptPasswordEncoder()
    const password = 'senha123'
    const hashedPassword = bcryptPasswordEncode.encode(password)
    const doPasswordsMath = bcryptPasswordEncode.compare(
      password,
      hashedPassword
    )
    expect(doPasswordsMath).toBe(true)
  })

  it('should return false from comparison between incorrect hashedPassword and password', async () => {
    const bcryptPasswordEncode = new BcryptPasswordEncoder()
    const password = 'senha123'
    const hashedPassword = bcryptPasswordEncode.encode(password)
    const doPasswordsMath = bcryptPasswordEncode.compare(
      'teste',
      hashedPassword
    )
    expect(doPasswordsMath).toBe(false)
  })
})
