import { DataType, Sequelize, where } from "sequelize";
const { Productos, Clientes } = require("../db.js");
import { IProducto, ProductoDto } from "../Interface/IProducto";
function UUIDValidator(idProd?: string): boolean {
    if (idProd != undefined) return /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i.test(idProd);
    else return false;
}
export async function List(): Promise<IProducto[]> {
    const list: IProducto[] = ProductoDto.lista(await Productos.findAll());
    return list;
}
export async function CreateOne(entity: IProducto): Promise<IProducto> {
    const save: IProducto = await Productos.create(entity);
    return save;
}
export async function destroy(idProd?: string): Promise<boolean> {
    if (!UUIDValidator(idProd)) {
        throw new Error("BAD REQUEST");
    }
    const product: IProducto =  await Productos.findOne({ where: { id: idProd } });
    if (product == null) {
        throw new Error("NOT FOUND");
    }
    await Productos.destroy({
        where: {
            id: idProd
        }
    });
    return true;
}
export async function GetOneProduct(idProd?: string): Promise<IProducto> {
    if (!UUIDValidator(idProd)) {
        throw new Error("BAD REQUEST");
    }
    const product: ProductoDto = new ProductoDto(await Productos.findOne({ where: { id: idProd } }));
    if (product == null) {
        throw new Error("NOT FOUND");
    }
    return product;
}
export async function UpdateOneProduct(producto: IProducto, idProd?: string): Promise<IProducto> {
    if (!UUIDValidator(idProd)) {
        throw new Error("BAD REQUEST");
    }
    const product: IProducto = await Productos.findOne({ where: { id: idProd } });
    if (product) {
        throw new Error("NOT FOUND");
    }
    await Productos.update(
        producto,
        {
            where:
            {
                id: idProd
            }
        });
    return product;
}
export async function GetWithClients(): Promise<IProducto[]> {
    const productos: IProducto[] = await Productos.findAll(
        {
            include: Clientes
        }
    )
    return productos;
}