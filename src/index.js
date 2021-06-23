const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//Server
app.listen(port, () => console.log(`Server live on http://localhost:${port}`))

//Public files
const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

//Routes
app.use(require('./routes/web'))