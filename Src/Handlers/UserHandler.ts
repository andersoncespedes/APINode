import {StatusCodes} from "http-status-codes"
import { Request, Response } from 'express';
export function Show(request : Request, response : Response) : Response{
    return response.status(StatusCodes.OK).json({Mensaje:"Hola"});
}