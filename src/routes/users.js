const express = require('express')
const app = express.Router()
const path = require('path')
const usersController = require('../controllers/usersController')

app.get('/users/login', usersController.login)

module.exports = app
