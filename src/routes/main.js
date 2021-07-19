const express = require('express')
const app = express.Router()
const path = require('path')
const mainController = require('../controllers/mainController')

app.get('/', mainController.index)

app.get('/detail', mainController.productDetail)

app.get('/login', mainController.login)

app.get('/cart', mainController.productCart)

app.get('/create', mainController.createProduct)

app.get('/edit', mainController.editProduct)

module.exports = app
