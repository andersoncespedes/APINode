import { Model, Sequelize, DataTypes} from "sequelize";

module.exports = (sequelize : Sequelize) => {
    sequelize.define(
        "Clientes",
        {
            id:
            {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey:true,
                allowNull:false
            },
            cedula:
            {
                type: DataTypes.INTEGER,
                allowNull:false,
                unique:true
            },
            nombre:
            {
                type:DataTypes.STRING(50),
                allowNull:false,
            },
            apellido:
            {
                type:DataTypes.STRING(50),
                allowNull:false
            },
            telefono:
            {
                type:DataTypes.INTEGER,
                allowNull:false
            }
        }
    )
}