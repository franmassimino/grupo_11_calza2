const express = require('express')
const app = express.Router()
const path = require('path')
const productsController = require('../controllers/productsController')

app.get('/product/detail', productsController.productDetail)

app.get('/product/cart', productsController.productCart)

app.get('/product/create', productsController.createProduct)

app.get('/product/edit', productsController.editProduct)

module.exports = app
