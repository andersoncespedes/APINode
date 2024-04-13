import { DataTypes, Sequelize } from "sequelize";

module.exports = (sequelize : Sequelize) => {
    sequelize.define(
        "Rol",
        {
            id:{
                type:DataTypes.UUID,
                defaultValue:DataTypes.UUIDV4,
                allowNull:false,
                primaryKey:true
            },
            description:{
                type:DataTypes.STRING(50),
                allowNull:false
            }
        }
    )
}