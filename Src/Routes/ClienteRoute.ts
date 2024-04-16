import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';
import { Create, CreateWithProd, DeleteOne, ShowClients, ShowOne } from "../Handlers/ClienteHandler";
const ClienteRoute = Router();
ClienteRoute.get("/",  ShowClients);
ClienteRoute.get("/:id", ShowOne);
ClienteRoute.post("/", Create);
ClienteRoute.post("/prod/:id", CreateWithProd);
ClienteRoute.delete("/:id", DeleteOne);



export {ClienteRoute};