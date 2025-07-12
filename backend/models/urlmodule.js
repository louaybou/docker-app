const sequelize = require('../DB/db')
const {dataTypes} = require('sequelize')

const urlLodule = sequelize.define('url', {
    originalUrl: {
        type: dataTypes.STRING,
        allowNull: false
    },
    shortcode: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
