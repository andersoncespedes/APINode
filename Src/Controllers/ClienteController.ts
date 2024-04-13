import { ICliente } from "../Interface/ICliente";
const {Clientes} = require("../db.js");
export async function listAll() : Promise<ICliente[]>
{
    const lista : ICliente[] = await Clientes.findAll();
    return lista;
}