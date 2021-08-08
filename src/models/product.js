const path = require('path');
const fs = require('fs');
const colorModel = require('./color.js');
const brandModel = require('./brand.js');
const categoryModel = require('./categories.js');

const model = {
    all: function () {
        const directory = path.resolve(__dirname, "../data", "products.json")
        const file = fs.readFileSync(directory, "utf-8")
        const convert = JSON.parse(file)
        return convert
    },

    allWithExtra: function () {
        let productos = this.all();
        productos.map(element => {
            element.brand = brandModel.one(element.brand)
            return element
        }).map(element => {
            element.color = colorModel.one(element.color)
            return element
        }).map(element => {
            element.category = categoryModel.one(element.category)
            return element
        })
        return productos;
    },

    one: function (id) {
        let productos = this.allWithExtra();
        let resultado = productos.find(producto => producto.id == id)
        return resultado;
    },

    new: function (data, file) {
        const directory = path.resolve(__dirname, "../data", "products.json")
        let productos = this.all();
        let nuevo = {
            id: productos.length > 0 ? productos[productos.length - 1].id + 1 : 1,
            brand: parseInt(data.marca),
            model: data.modelo,
            price: parseInt(data.precio),
            description: data.descripcion,
            img: `/img/uploads/products/${file.filename}`,
            category: parseInt(data.categoria),
            color: parseInt(data.colores),
        }
        productos.push(nuevo)
        fs.writeFileSync(directory, JSON.stringify(productos, null, 2));
        return true;
    },

    edit: function (data, file, id) {
        const directory = path.resolve(__dirname, "../data", "products.json")
        let productos = this.all();
        let updated = this.one(id);
        productos.map(producto => {
            if (producto.id == id) {
                producto.model = data.modelo
                producto.brand = parseInt(data.marca)
                producto.color = parseInt(data.colores)
                file == null ? producto.img = producto.img : producto.img = `/img/uploads/products/${file.filename}`
                if (file != undefined){
                    fs.unlinkSync(path.join(__dirname, "../../public", updated.img))
                } 
                producto.price = parseInt(data.precio)
                producto.category = parseInt(data.categoria)
                producto.description = data.descripcion
                return producto
            }
            return producto
        })
        fs.writeFileSync(directory, JSON.stringify(productos, null, 2));
        return true;
    },

    delete: function (id) {
        const directory = path.resolve(__dirname, "../data", "products.json")
        let productos = this.all();
        let deleted = this.one(id);
        productos = productos.filter(producto => producto.id != deleted.id)
        let imgPath = path.join(__dirname, "../../public", deleted.img)
        if (fs.existsSync(imgPath)){
            fs.unlinkSync(imgPath)
        } 
        fs.writeFileSync(directory, JSON.stringify(productos, null, 2));
        return true;
    }

};


module.exports = model;