"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Productos", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        codigo: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        nombre: {
            type: sequelize_1.DataTypes.STRING(40),
            allowNull: false
        },
        precio: {
            type: sequelize_1.DataTypes.DOUBLE(15, 2),
            allowNull: false
        },
    });
};
