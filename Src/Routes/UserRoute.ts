import { Router } from "express";
import { Show } from "../Handlers/UserHandler";
import express, { Request, Response } from 'express';
const UserRoute = Router();
UserRoute.get("/", (req: Request, res: Response) => Show(req, res));
export { UserRoute };

