module.exports = {
    productDetail: (req, res) => {
        res.render('products/productDetail', {style: 'productDetail', title: 'Nike Air Force 1'})
    },
    productCart: (req, res) => {
        res.render('products/productCart', {style: 'productCart', title: 'Carrito'})
    },
    createProduct: (req, res) => {
        res.render('products/createProduct', {style: 'createProduct', title: 'Crear producto'})
    },
    editProduct: (req, res) => {
        res.render('products/editProduct', {style: 'editProduct', title: 'Editar producto'})
    },
}