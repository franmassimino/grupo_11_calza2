const express = require('express')
const app = express.Router()
const path = require('path')
const productsController = require('../controllers/productsController')
const multer = require('multer')

let dest = multer.diskStorage({
    destination: function (req, file, cb) {
        let extension = path.extname(file.originalname);
        if(extension.indexOf('png') > 0){
            cb(null, path.resolve(__dirname,'../../public/img/uploads','products'))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})

const upload = multer({storage:dest})

app.get('/products', productsController.productList)

app.get('/products/detail/:id', productsController.productDetail)

app.get('/products/cart', productsController.productCart)

app.get('/products/create', productsController.createProduct)

app.get('/products/edit/:id', productsController.editProduct)

app.post('/products/save', [upload.single('imagen')], productsController.saveProduct)

app.put('/products/update/:id', [upload.single('imagen')], productsController.updateProduct)

app.delete('/products/delete/:id', productsController.deleteProduct)


module.exports = app
