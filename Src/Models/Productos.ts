import { DataTypes, Sequelize, UUIDV4 } from "sequelize";

module.exports = (sequelize : Sequelize) => {
    sequelize.define(
        "Productos",
        {
            id:{
                type:DataTypes.UUID,
                defaultValue:UUIDV4,
                allowNull:false,
                primaryKey:true
            },
            codigo:
            {
                type:DataTypes.STRING(50),
                allowNull:false
            },
            nombre:{
                type:DataTypes.STRING(40),
                allowNull:false
            },
            precio:
            {
                type:DataTypes.DOUBLE(15, 2),
                allowNull:false
            },
        }
    )
}