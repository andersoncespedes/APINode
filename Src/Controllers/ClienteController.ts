import { ICliente } from "../Interface/ICliente";
const { Clientes } = require("../db.js");
export async function listAll(): Promise<ICliente[]> {
    const lista: ICliente[] = await Clientes.findAll();
    return lista;
}
export async function GetOne(id: number)  : Promise<ICliente>
{
    const data : ICliente = await Clientes.findOne({where:{id:id}});
    return data;
}