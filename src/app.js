import express from 'express'
import routes from './routes.js'

import './db.js'
import 'dotenv/config'

const app = express()

app.use(routes)

app.use(express.json())

app.listen(process.env.PORT)
