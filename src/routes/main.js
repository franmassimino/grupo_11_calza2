const express = require('express')
const app = express.Router()
const path = require('path')
const mainController = require('../controllers/mainController')

app.get('/', mainController.index)

module.exports = app
