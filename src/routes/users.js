const express = require('express')
const app = express.Router()
const path = require('path')
const usersController = require('../controllers/usersController')
const isLogged = require('../middlewares/logged')
const auth = require('../middlewares/auth')
const hash = require('../middlewares/hash')

//Multer
const multer = require('multer')
const storage = require('../middlewares/multer')
const upload = multer({storage: storage("users")})

//Validations
const registerValidation = require('../middlewares/register')
const loginValidation = require('../middlewares/login')


app.get('/users/login', auth,  usersController.login)

app.get("/users/profile", isLogged , usersController.profile)

app.get('/users/register', auth,  usersController.register)

app.get("/users/logout", usersController.logout)

app.post('/users/processRegister', [upload.single('img'), hash], usersController.processRegister)

app.post('/users/processLogin', loginValidation, usersController.processLogin)

app.delete('/users/destroy', usersController.destroy)

/* app.put("/users/update", usersController.update) */


module.exports = app
