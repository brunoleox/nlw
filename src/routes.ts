import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageControler'
import { ensureAuthenticate } from './middleware/ensureAuthenticate'
const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post(
  '/messages',
  ensureAuthenticate,
  new CreateMessageController().handle
)

export { router }
