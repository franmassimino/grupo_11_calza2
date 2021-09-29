module.exports = (sequelize, DataType) => {
    const Brand = sequelize.define('Brand', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
        }
    }, {
        timestamps: false,
        tableName: 'brands'
    })
    
    Brand.associate = ({Product}) => {
        Brand.hasMany(Product, {as: 'products', foreignKey: 'brand'})
    }

    return Brand
}