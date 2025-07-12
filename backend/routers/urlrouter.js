const express = require('express')
const urlRouter = express.Router()
urlRouter.get('home', (req, res) => {
    res.send('ulr shortener api ')
})
urlRouter.post('home', (req, res) => {
    res.send('ulr shortener api post')
})



module.exports = urlRouter