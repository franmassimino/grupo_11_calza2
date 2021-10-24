const db = require('../database/models/index')
const { Product, Brand } = db

module.exports = {
    index: async (req, res) => {
        try {
            const brands = await Brand.findAll()
            let list = await Product.findAll({ include: ['brands'], where: {
                destacada: 1
            }})
            res.render('index', {
                title: 'Home',
                list: list
            })
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },
}