"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Clientes", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        cedula: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        telefono: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    });
};
