import { app } from '@/app'
import { register } from '../http/controllers/register'

export async function appRoutes() {
  app.post('/users', register)
}