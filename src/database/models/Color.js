module.exports = (Sequelize, DataType) => {
    return Sequelize.define('Color', {
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
        tableName: 'colors'
    })

    return Color
}