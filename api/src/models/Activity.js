const {DataTypes}= require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        dificulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM('spring', 'summer', 'autumn', 'winter')
        }

    })
}