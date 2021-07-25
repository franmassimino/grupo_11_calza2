const products = [
    {
        marca: 'NIKE',
        modelo: 'AIR FORCE ONE',
        precio: '520',
        descripcion: 'Las Zapatillas Nike Air Force 1 están diseñadas e inspiradas en el icónico modelo AF1, su capellada en cuero sintético te da un estilo retro y único de la marca. Su entresuela de espuma te proporciona pisadas más amortiguadas y estables, fáciles de combinar con cualquier tipo de prendas para que luzcas siempre a la moda.',
        imagen: '/img/zapatilla1.png',
        categoria: 'urbanas',
        colores: 'blanco',
    },

    {
        marca: 'ADIDAS',
        modelo: 'ORIGINALS 11',
        precio: '450',
        descripcion: 'diseño innovador que combina lo clásico y lo moderno. Presenta una parte superior de malla suave y transpirable, perfecta para tu día a día. El sistema de lazada exclusivo aporta un toque vanguardista a tu estilo',
        imagen: '/img/zapatilla2.png',
        categoria: 'oferta',
        colores: 'naranja',
    },

    {
        marca: 'NIKE',
        modelo: 'LEBRON 18',
        precio: '930',
        descripcion: 'Con tecnología Knitposite 2.0 ligera sobre una unidad Zoom Air integral, que ayuda a mantener la velocidad necesaria para superar con facilidad a los defensas y llegar a la canasta.',
        imagen: '/img/zapatilla3.png',
        categoria: 'destacada',
        colores: 'violeta',
    },

    {
        marca: 'NIKE',
        modelo: 'AIR MAX 97',
        precio: '1580',
        descripcion: 'Con el mismo diseño ondulante de las originales inspirado en los trenes bala japoneses, las Nike Air Max 97 te ofrecen un look que potencia tu estilo a toda velocidad. Con la innovadora unidad Nike Air completa que revolucionó el mundo del running y nuevos colores y detalles impecables, te permiten disfrutar de la comodidad de primera clase.',
        imagen: '/img/zapatilla4.png',
        categoria: 'diseñador',
        colores: 'rojo',
    },

    {
        marca: 'ADIDAS',
        modelo: 'PERFORMANCE',
        precio: '320',
        descripcion: 'Con estas zapatillas adidas en tus pies podrás correr en el parque y luego tomar un café con amigos con total comodidad. Su exterior de malla ofrece transpirabilidad que mantiene tus pies frescos de la mañana a la noche. La suela tipo cupsole de caucho brinda la estabilidad necesaria para enfrentarte a todo lo que te depare el día',
        imagen: '/img/zapatilla5.png',
        categoria: 'running',
        colores: 'negro',
    },

    {
        marca: 'ADIDAS',
        modelo: 'ULTRA BOOST 20',
        precio: '720',
        descripcion: 'Prototipo tras prototipo. Innovación tras innovación. Prueba tras prueba. Uníte a nosotros en la busqueda constante de maximizar y armonizar el peso, la comodidad y en rendimiento. Ultraboost 20. Descubrí un retorno de energía increíble.',
        imagen: '/img/zapatilla6.png',
        categoria: 'running',
        colores: 'verde',
    },

    {
        marca: 'NIKE',
        modelo: 'AIR MAX 97 ESSENTIAL',
        precio: '580',
        descripcion: 'Las Nike Air Max 97 essential cuentan con el mismo diseño ondulado original, inspirado en los trenes de bala japoneses, para ofrecer un look que impulsa tu estilo a toda velocidad. Con la innovadora unidad Nike Air completa que revolucionó el mundo del running y nuevos colores y detalles impecables, te permiten disfrutar de la comodidad de primera clase.',
        imagen: '/img/zapatilla7.png',
        categoria: 'diseñador',
        colores: 'gris',
    },

    {
        marca: 'NIKE',
        modelo: 'AIR MORE UPTEMPO',
        precio: '960',
        descripcion: 'La zapatilla Nike Air More Uptempo, lanzada por primera vez durante la era de alto vuelo del básquetbol de los 90, ha pasado de ser un ícono en la cancha a un ser un calzado urbano de manera casi imperceptible. Con su distintivo diseño de marca, su perfil de confección potente y Nike Air en la planta del pie, su lugar en la historia del calzado es indiscutible.',
        imagen: '/img/zapatilla8.png',
        categoria: 'destacada',
        colores: 'negro',
    },
]

module.exports = {
    productDetail: (req, res) => {
        res.render('products/productDetail', { style: 'productDetail', title: 'Nike Air Force 1' })
    },
    productCart: (req, res) => {
        res.render('products/productCart', { style: 'productCart', title: 'Carrito' })
    },
    createProduct: (req, res) => {
        res.render('products/createProduct', { style: 'createProduct', title: 'Crear producto' })
    },
    editProduct: (req, res) => {
        res.render('products/editProduct', { style: 'editProduct', title: 'Editar producto' })
    },
}