const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 3001
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()
//when testing in postman for setGoals and adding key and value, below 2 code lines help get what's passed
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))
//overwrite default express error handler with the one created from errorMiddleware file
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))