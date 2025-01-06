import express from 'express'
import {
  getProfileController,
  loginControllers,
  signupControllers,
} from '../controllers/index.js'
import isAuthenticated from '../middlewares/index.js'
const app = express.Router()

app.post('/register', signupControllers)
app.post('/login', loginControllers)

app.use(isAuthenticated)
app.get('/profile', getProfileController)

export default app
