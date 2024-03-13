// Import dependencies
import express from 'express'
import cors from 'cors'

// Import modules
import 'dotenv/config'
import { dbConnect } from './config/mongo.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.listen(port, () => {
	console.log('Run in port:', port)
})

dbConnect()
