module.exports = (Sequelize, DataType) => {
    return Sequelize.define('Brand', {
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
        tableName: 'brands'
    })

    return Brand
}