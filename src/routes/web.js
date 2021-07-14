const express = require('express')
const app = express.Router()
const path = require('path')
const mainController = require('../controllers/mainController')

app.get('/', mainController.index)

app.get('/detail', mainController.productDetail)

app.get('/login', mainController.login)

app.get('/cart', mainController.productCart)



module.exports = app
