const express = require('express')
const app = express.Router()
const path = require('path')
const productsController = require('../controllers/productsController')

app.get('/products', productsController.productList)

app.get('/products/detail', productsController.productDetail)

app.get('/products/cart', productsController.productCart)

app.get('/products/create', productsController.createProduct)

app.get('/products/edit', productsController.editProduct)



module.exports = app
