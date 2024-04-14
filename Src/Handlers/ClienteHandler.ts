import { StatusCodes } from "http-status-codes";
import { GetOne, listAll } from "../Controllers/ClienteController";
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
export async function ShowOne(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data: ICliente = await GetOne(parseInt(id));
    if (data == null) {
        return response.status(StatusCodes.NOT_FOUND).send(
            {
                success: false,
                messagge: "Client Not Found",
            }
        );
    }
    return response.status(StatusCodes.OK).send(
        {
            success: true,
            messagge: "Fetched client",
            data: data
        }
    );
}