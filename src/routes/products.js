const express = require('express')
const app = express.Router()
const path = require('path')
const productsController = require('../controllers/productsController')

//Multer
const multer = require('multer')
const storage = require('../middlewares/multer')
const upload = multer({storage: storage("products")})


app.get('/products', productsController.productList)

app.get('/products/detail/:id', productsController.productDetail)

app.get('/products/cart', productsController.productCart)

app.get('/products/create', productsController.createProduct)

app.get('/products/edit/:id', productsController.editProduct)

app.post('/products/save', [upload.single('imagen')], productsController.saveProduct)

app.put('/products/update/:id', [upload.single('imagen')], productsController.updateProduct)

app.delete('/products/delete/:id', productsController.deleteProduct)


module.exports = app
