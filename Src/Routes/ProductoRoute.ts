import { Router } from "express";
import { Create, DeleteOne, GetOne, Show, ShowWithClients, UpdateOne } from "../Handlers/ProductoHandler";
import express, { Request, Response } from 'express';
import { authenticateToken } from '../Middleware/JwtBearer';

const ProductosRoute = Router();
ProductosRoute.get("/",authenticateToken, Show);
ProductosRoute.get("/clients", ShowWithClients);
ProductosRoute.get("/:id", GetOne);
ProductosRoute.delete("/:id", DeleteOne);
ProductosRoute.post("/", Create);
ProductosRoute.put("/:id", UpdateOne);

export { ProductosRoute };

