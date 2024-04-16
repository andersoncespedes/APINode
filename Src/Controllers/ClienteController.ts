import { QueryError } from "sequelize";
import { ClienteDto, ICliente } from "../Interface/ICliente";
const { Clientes, Productos } = require("../db.js");
function UUIDValidator(idProd?: string): boolean {
    if (idProd != undefined) return /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i.test(idProd);
    else return false;
}
export async function listAll(): Promise<ICliente[]> {
    const lista: ICliente[] = ClienteDto.list(await Clientes.findAll());
    return lista;
}
export async function GetOne(id: string): Promise<ICliente> {
    if (!UUIDValidator(id)) {
        throw new Error("BAD REQUEST");
    }
    const data: ICliente = new ClienteDto(await Clientes.findOne({ where: { id: id } }));
    if (data.apellido == null) {
        throw new Error("NOT FOUND");
    }
    return data;
}
export async function destroy(id? :string) : Promise<ICliente>
{
    if(!UUIDValidator(id)){
        throw new QueryError("BAD REQUEST");
    }    
    console.log("hola")
    const entity : ClienteDto = new ClienteDto( await Clientes.findOne({where:{id:id}}));
    console.log(entity)
    if(entity.apellido == null){
        throw new Error("NOT FOUND");
    }
    await Clientes.destroy({where:{id:id}});
    return entity;
}
export async function CreateOne(entity: ICliente): Promise<ICliente> {
    const save: ICliente = await Clientes.create(entity);
    return save;
}
export async function CreateRelation(id?: string): Promise<void> {
    if (!UUIDValidator(id)) {
        throw new QueryError("BAD REQUEST")
    } 
    const data = await Clientes.findOne({ where: { id: id } });
    const data2 = await Productos.findOne({ where: { id: "f7c97357-b2da-4baf-a62c-e329c1e9f9f8" } });
    console.log(await data);
    await data.addProductos(data2);
}