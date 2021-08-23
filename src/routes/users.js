const express = require('express')
const app = express.Router()
const path = require('path')
const usersController = require('../controllers/usersController')
const isLogged = require('../middlewares/logged')

//Multer
const multer = require('multer')
const storage = require('../middlewares/multer')
const upload = multer({storage: storage("users")})

//Validations
const registerValidation = require('../middlewares/register')
const loginValidation = require('../middlewares/login')


app.get('/users/login', usersController.login)

app.get("/users/profile", [isLogged] , usersController.profile)

app.get("/users/logout", [isLogged] , usersController.logout)

app.post('/users/processRegister', upload.single('imagen'), usersController.processRegister)

app.post('/users/processLogin', loginValidation, usersController.processLogin)

/* app.put("/users/update", usersController.update) */


module.exports = app
