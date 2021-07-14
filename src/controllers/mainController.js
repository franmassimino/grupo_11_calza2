const data = {
    
}

module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    login: (req, res) => {
        res.render('login')
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
}