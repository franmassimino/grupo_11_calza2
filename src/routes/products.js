const express = require('express')
const app = express.Router()
const path = require('path')
const productsController = require('../controllers/productsController')
const productValidation = require('../middlewares/product')
const isLogged = require('../middlewares/logged')

//Multer
const multer = require('multer')
const storage = require('../middlewares/multer')
const upload = multer({storage: storage("products")})


app.get('/products', productsController.productList)

app.get('/products/detail/:id', productsController.productDetail)

app.get('/products/cart', productsController.productCart)

app.get('/products/create', isLogged, productsController.createProduct)

app.get('/products/edit/:id',  isLogged, productsController.editProduct)

app.post('/products/save', [upload.single('img')], productsController.saveProduct)

app.put('/products/update/:id', [upload.single('img'), productValidation], productsController.updateProduct)

app.delete('/products/delete/:id', productsController.deleteProduct)


module.exports = app
