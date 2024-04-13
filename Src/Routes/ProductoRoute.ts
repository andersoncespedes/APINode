import { Router } from "express";
import { Create, DeleteOne, Show } from "../Handlers/ProductoHandler";
import express, { Request, Response } from 'express';
const ProductosRoute = Router();
ProductosRoute.get("/", (req: Request, res: Response) => Show(req, res));
ProductosRoute.delete("/:id", (req : Request, res : Response) => DeleteOne(req, res));
ProductosRoute.post("/", (req: Request, res: Response) => Create(req, res));

export { ProductosRoute };

