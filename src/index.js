// Import dependencies
import express from 'express'
import cors from 'cors'

// Import modules
import 'dotenv/config'
import { dbConnect } from './config/mongo.js'
import { usersRouter } from './routes/users.js'

// Initializations
const app = express()
const port = process.env.PORT || 3000

// Middlewares
app.use(cors())

// Routes
app.use('/api/v1', usersRouter)

// Running Servers
app.listen(port, () => {
	console.log('Run in port:', port)
})

dbConnect()
