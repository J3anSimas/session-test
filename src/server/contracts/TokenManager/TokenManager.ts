import { InvalidJWTSecretError } from './errors'

export interface TokenManagerInterface {
  generate(id: string): string
  parse(token: string): ParsedDataToken | InvalidJWTSecretError
}

export type ParsedDataToken = {
  id: string
  iat: number
}
