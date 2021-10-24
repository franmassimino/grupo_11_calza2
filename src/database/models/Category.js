module.exports = (Sequelize, DataType) => {
    return Sequelize.define('Category', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'categories'
    })

    Category.associate = ({Product}) => {
        Category.hasMany(Product, {as: 'categories', foreignKey: 'category'})
    }

    return Category
}