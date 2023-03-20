import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

// dotenv
dotenv.config()

// mongodb connection
connectDB()

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.MODE} mode on port ${PORT}`)
})