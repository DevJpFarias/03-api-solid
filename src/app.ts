import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'crypto'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    id: randomUUID(),
    name: 'Teste',
    email: 'teste@teste.com'
  }
})

export const app = fastify()