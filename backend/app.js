const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const urlRouter = require('./routers/urlrouter')
app.route('/', urlRouter)



app.listen(PORT)