const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//Server
app.set("port",process.env.PORT || port)
app.listen(app.get("port"),() => console.log("Server live on http://localhost:"+app.get("port")))

//View engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Public files
const publicPath = path.resolve(__dirname, '../public')
app.use(express.static(publicPath))

//Routes
app.use(require('./routes/main'))
app.use(require('./routes/products'));
app.use(require('./routes/users'));
