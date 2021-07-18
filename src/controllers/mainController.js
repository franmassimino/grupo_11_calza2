const data = {
    
}

module.exports = {
    index: (req, res) => {
        res.render('index', {title: 'Home'})
    },
    productDetail: (req, res) => {
        res.render('productDetail', {style: 'productDetail', title: 'Nike Air Force 1'})
    },
    login: (req, res) => {
        res.render('login', {style: 'login', title: 'Iniciar sesión'})
    },
    productCart: (req, res) => {
        res.render('productCart', {style: 'productCart', title: 'Carrito'})
    },
    createProduct: (req, res) => {
        res.render('./products/createProduct', {style: 'createProduct', title: 'Crear producto'})
    },
}