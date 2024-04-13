import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize: Sequelize) => {
    sequelize.define(
        "Usuario",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            nombre:
            {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            correo: 
            {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            password:{ 
                type: DataTypes.STRING(225),
                allowNull:false
            }
        }
    )
} 