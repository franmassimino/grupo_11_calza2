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

    return Category
}