import { app } from '@/app'
import { register } from '../http/controllers/register'
import { authenticate } from './controllers/authenticate'

export async function appRoutes() {
  app.post('/users', register)
  app.post('/sessions', authenticate)
}