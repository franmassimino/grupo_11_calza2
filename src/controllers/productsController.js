const { validationResult } = require("express-validator");
//DB
const db = require('../database/models/index')
const { Product, Brand, Color, Category } = db
const { Op } = require('sequelize')
const { like } = Op

module.exports = {
    productList: async (req, res) => {
        try {
            const brands = await Brand.findAll()
            let list = await Product.findAll({ include: 'brands' })
            res.render('products/products', {
                style: 'productList',
                title: 'Productos',
                list: list
            })
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },

    productDetail: async (req, res) => {
        try {
            const brands = await Brand.findAll()
            const colors = await Color.findAll()
            let product = await Product.findByPk(req.params.id, { include: ['brands', 'colors'] })
            let list = await Product.findAll({
                include: ['brands'], where: {
                    id: {
                        [Op.ne]: req.params.id,
                    }
                }, limit: 4
            })
            res.render('products/productDetail', {
                style: 'productDetail',
                title: 'productDetail',
                list: list,
                product: product
            })
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },

    productCart: (req, res) => {
        res.render('products/productCart', {
            style: 'productCart',
            title: 'Carrito'
        })
    },

    createProduct: async (req, res) => {
        try {
            const brands = await Brand.findAll()
            const colors = await Color.findAll()
            const categories = await Category.findAll()
            res.render('products/createProduct', {
                style: 'createProduct',
                title: 'Crear producto',
                colors: colors,
                brands: brands,
                categories: categories
            })
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },

    editProduct: async (req, res) => {
        try {
            const brands = await Brand.findAll()
            const colors = await Color.findAll()
            const categories = await Category.findAll()
            let product = await Product.findByPk(req.params.id, { include: ['brands', 'colors', 'categories'] })
            res.render('products/editProduct', {
                style: 'editProduct',
                title: 'Editar producto',
                product: product,
                colors: colors,
                brands: brands,
                categories: categories
            })
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },

    saveProduct: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(404).send(errors)
        } else {
            try {
                let data = {
                    ...req.body,
                    img: `/img/uploads/products/${req.file.filename}`,
                }
                const created = await Product.create(data)
                created ? res.redirect('/') : res.send("Error al cargar la informacion")
            } catch (e) {
                console.log(e)
                res.redirect('/404')
            }
        }
    },

    updateProduct: async (req, res) => {
        let product = await Product.findByPk(req.params.id)
        try {
            let data = {
                ...req.body,
            }
            console.log(data.img);
            const updated = await Product.update(data, {where: {
                id: req.params.id
            }})
            updated ? res.redirect('/products') : res.send("Error al cargar la informacion")
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const deleted = await Product.destroy({where: {id: req.params.id}})
            return deleted == true ? res.redirect("/") : res.send("Error al cargar la informacion")
        } catch (e) {
            console.log(e)
            res.redirect('/404')
        }
    },

}
