"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Usuario", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        correo: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: sequelize_1.DataTypes.STRING(225),
            allowNull: false
        }
    });
};
