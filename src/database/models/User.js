module.exports = (Sequelize, DataType) => {
    return Sequelize.define('User', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user: {
            type: DataType.STRING,
            allowNull: false
        }, 
        email: {
            type: DataType.STRING,
            allowNull: false
        }, 
        password: {
            type: DataType.STRING,
            allowNull: false
        }, 
        img: {
            type: DataType.STRING,
        }, 
    }, {
        timestamps: false,
        tableName: 'users'
    })

    return User
}