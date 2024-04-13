import { StatusCodes } from "http-status-codes";
import { listAll } from "../Controllers/ClienteController";
import { ICliente } from "../Interface/ICliente";
import { Request, Response } from 'express';

export async function ShowClients(request : Request, response : Response) : Promise<Response>
{
    const list : ICliente[] = await listAll();
    return response.status(StatusCodes.OK).send(
        {
            success:true,
            messagge: "Fetched Clients",
            data:list
        }
    )
}