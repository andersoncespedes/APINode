import { StatusCodes } from "http-status-codes"
import { Request, Response } from 'express';
import { List, CreateOne, destroy } from "../Controllers/ProductoController";
import { IProducto } from "../Interface/IProducto";
export async function Show(request: Request, response: Response): Promise<Response> {
    const list: IProducto[] = await List();
    return response
        .status(StatusCodes.OK)
        .send(
            {
                success: true,
                messagge: "Fetched Products",
                data: list
            }
        );
}
export async function Create(request: Request, response: Response): Promise<Response> {
    const { nombre, codigo, precio } = request.body;
    let entity: IProducto =
    {
        nombre: nombre,
        codigo: codigo,
        precio: precio
    }
    const prod: IProducto = await CreateOne(entity);
    return response
        .status(StatusCodes.CREATED)
        .send(
            {
                success: true,
                messagge: "created",
                data: prod
            }
        )
}
export async function DeleteOne( request : Request , response : Response) : Promise<Response>{
    const {id} = request.params;
    let action : boolean = await destroy( id );
    return response
        .status(StatusCodes.NO_CONTENT).send();

}