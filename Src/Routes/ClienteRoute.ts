import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';
import { ShowClients, ShowOne } from "../Handlers/ClienteHandler";
const ClienteRoute = Router();
ClienteRoute.get("/",  ShowClients);
ClienteRoute.get("/:id", ShowOne);
export {ClienteRoute};