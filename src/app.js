import express from 'express'
import router from './router.js'
import './db.js'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.PORT)
