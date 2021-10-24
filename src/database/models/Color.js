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

    Color.associate = ({Product}) => {
        Color.hasMany(Product, {as: 'products', foreignKey: 'color'})
    }

    return Color
}