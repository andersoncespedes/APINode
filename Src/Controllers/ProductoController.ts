import { DataType, Sequelize, where } from "sequelize";
const { Productos } = require("../db.js");
import {IProducto} from "../Interface/IProducto"; 
export async function List() : Promise<IProducto[]>{
    const list : IProducto[] = await Productos.findAll();
    return list;
}
export async function CreateOne(entity : IProducto) : Promise<IProducto>{
    const save : IProducto= await Productos.create( entity);
    return save;
}
export async function destroy(id : string | any) : Promise<boolean> {
    const product : IProducto = await Productos.findOne({where:{id:id}});
    if(product == null){
        return false;
    }
    await Productos.destroy({
        where:{
            id:id
        }
    });
    return true;
}