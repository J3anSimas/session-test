import { PrismaClient } from '@prisma/client'
import { DATABASE_CONNECTION } from './config'
export const Prisma = new PrismaClient({
  datasources: { db: { url: DATABASE_CONNECTION } }
})
