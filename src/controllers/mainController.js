const product = require('../models/product');


module.exports = {
    index: (req, res) => {
        res.render('index', {
            title: 'Home',
            list: product.allWithExtra()
        })
    },
}