import { StatusCodes } from "http-status-codes"
import { Request, Response } from 'express';
import { List, CreateOne, destroy, GetOneProduct, UpdateOneProduct } from "../Controllers/ProductoController";
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
export async function GetOne(request: Request, response: Response): Promise<Response> {
    try {
        const { id } = request.params;
        const product = await GetOneProduct(id?.toString());
        return response.status(StatusCodes.OK).send(
            {
                success: true,
                messagge: "GETTED",
                data: product
            }
        );
    } catch (error: any) {
        const errorObj: object =
        {
            success: false,
            Error: error.message
        }
        switch (error.message) {
            case ("BAD REQUEST"):
                return response.status(StatusCodes.BAD_REQUEST).send(errorObj);
            case ("NOT FOUND"):
                return response.status(StatusCodes.NOT_FOUND).send(errorObj);
            default:
                return response.status(StatusCodes.BAD_GATEWAY).send(errorObj);
        }

    }
}
export async function DeleteOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
        let action: boolean = await destroy(id);
        return response
            .status(StatusCodes.NO_CONTENT).send();
    } catch (error: any) {
        const errorObj: object =
        {
            success: false,
            Error: error.message
        }
        switch (error.message) {
            case ("NOT FOUND"):
                return response.status(StatusCodes.NOT_FOUND).send(errorObj);
            case ("BAD REQUEST"):
                return response.status(StatusCodes.BAD_REQUEST).send(errorObj)
            default:
                return response.status(StatusCodes.BAD_GATEWAY).send(errorObj);
        }
    }
}
export async function UpdateOne(request: Request, response: Response): Promise<Response> {
    const { nombre, codigo, precio } = request.body;
    const { id: idProd } = request.params;
    let entity: IProducto =
    {
        nombre: nombre,
        codigo: codigo,
        precio: precio
    }
    try {
        let action : IProducto = await UpdateOneProduct(entity, idProd);
        return response
            .status(StatusCodes.CREATED).send(
                {
                    success:true,
                    message:"Created",
                    data: action
                }
            );
    } catch (error: any) {
        const errorObj: object =
        {
            success: false,
            Error: error.message
        }
        switch (error.message) {
            case ("NOT FOUND"):
                return response.status(StatusCodes.NOT_FOUND).send(errorObj);
            case ("BAD REQUEST"):
                return response.status(StatusCodes.BAD_REQUEST).send(errorObj)
            default:
                return response.status(StatusCodes.BAD_GATEWAY).send(errorObj);
        }
    }
}