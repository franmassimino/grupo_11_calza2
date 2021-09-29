module.exports = (sequelize, DataType) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        model: {
            type: DataType.STRING,
            allowNull: false
        },
        color: {
            type: DataType.INTEGER,
            allowNull: false
        },
        brand: {
            type: DataType.INTEGER,
            allowNull: false
        },
        category: {
            type: DataType.INTEGER,
            allowNull: false
        },
        description: {
            type: DataType.TEXT,
        }, 
        price: {
            type: DataType.INTEGER,
            allowNull: false
        },
        img: {
            type: DataType.STRING
        },
        destacada: {
            type: DataType.BOOLEAN
        }
    }, {
        timestamps: false,
        tableName: 'products'
    })
    
    Product.associate = ({Brand}) => {
        Product.belongsTo(Brand, {as: 'brands', foreignKey: 'brand'})
    }

    return Product
}