import { StatusCodes } from "http-status-codes";
import { CreateOne, CreateRelation, destroy, GetOne, listAll } from "../Controllers/ClienteController";
import { ICliente } from "../Interface/ICliente";
import { Request, Response } from 'express';

export async function ShowClients(request: Request, response: Response): Promise<Response> {
    const list: ICliente[] = await listAll();
    return response.status(StatusCodes.OK).send(
        {
            success: true,
            messagge: "Fetched Clients",
            data: list
        }
    )
}
export async function Create(request: Request, response: Response): Promise<Response> {
    const { nombre, apellido, cedula, telefono } = request.body;
    let entity: ICliente =
    {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        telefono: telefono
    }
    const prod: ICliente = await CreateOne(entity);
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
export async function ShowOne(request: Request, response: Response): Promise<Response> {
    try {
        const { id } = request.params;
        const data: ICliente = await GetOne(id);
        return response.status(StatusCodes.OK).send(
            {
                success: true,
                messagge: "Fetched client",
                data: data
            }
        );
    } catch (error: any) {
        switch (error.message) {
            case ("NOT FOUND"):
                return response.status(StatusCodes.NOT_FOUND).send(
                    {
                        success: false,
                        messagge: "Client Not Found",
                    }
                );
                break;
            case("BAD REQUEST"):
                return response.status(StatusCodes.BAD_REQUEST).send(
                    {
                        success: false,
                        messagge: "BAD REQUEST",
                    }
                )
            default:
                return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
                    {
                        success: false,
                        messagge: "Client Not Found",
                    }
                );
        }
    }
}

export async function CreateWithProd(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await CreateRelation(id);
    return response
        .status(StatusCodes.CREATED)
        .send(
            {
                success: true,
                messagge: "created",
                data: null
            }
        )
}

export async function DeleteOne(request: Request, response: Response): Promise<Response> {
    try {
        const { id } = request.params;
        const data: ICliente = await destroy(id);
        if(data.apellido == null){
            throw new Error("NOT FOUND");
        }
        return response.status(StatusCodes.NO_CONTENT).send(
            {
                success: true,
                messagge: "Fetched client",
            }
        );
    } catch (error: any) {
        switch (error.message) {
            case ("NOT FOUND"):
                return response.status(StatusCodes.NOT_FOUND).send(
                    {
                        success: false,
                        messagge: "Client Not Found",
                    }
                );
                break;
            case("BAD REQUEST"):
                return response.status(StatusCodes.BAD_REQUEST).send(
                    {
                        success: false,
                        messagge: "BAD REQUEST",
                    }
                )
            default:
                return response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
                    {
                        success: false,
                        messagge: "Client Not Found",
                    }
                );
        }
    }
}