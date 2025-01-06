import express from 'express'
import db from './config/db.js'
import authRoute from './routes/index.js'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 8000
db()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: '*', credentials: true }))
app.get('/', (req, res) => res.send('Welcome to the server'))
app.use('/api/v1/user', authRoute)
app.listen(PORT, () => console.log('listening on port:', PORT))
