import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';
const ClienteRoute = Router();
ClienteRoute.get("/", (request : Request, response : Response) : Response =>{
    return response.status(StatusCodes.OK).send(
        {
            success:true
        }
    )
});
export {ClienteRoute};