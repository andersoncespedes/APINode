import { Router } from "express";
import { Create, DeleteOne, GetOne, Show, UpdateOne } from "../Handlers/ProductoHandler";
import express, { Request, Response } from 'express';
const ProductosRoute = Router();
ProductosRoute.get("/", (req: Request, res: Response) => Show(req, res));
ProductosRoute.get("/:id", (req: Request, res: Response) => GetOne(req, res));
ProductosRoute.delete("/:id", (req : Request, res : Response) => DeleteOne(req, res));
ProductosRoute.post("/", (req: Request, res: Response) => Create(req, res));
ProductosRoute.put("/:id", (req: Request, res: Response) => UpdateOne(req, res));

export { ProductosRoute };

