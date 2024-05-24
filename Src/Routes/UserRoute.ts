import express, { Request, Response, Router } from 'express';
import {LoginUser, RegisterUser} from "../Handlers/UsuarioHandler.js"
const jwt = require("jsonwebtoken");

import { authenticateToken } from '../Middleware/JwtBearer';
const { Usuario } = require("../db.js");
const UserRoute = Router();

// Ruta para generar un token
UserRoute.post('/login', LoginUser);
UserRoute.post("/register", RegisterUser);

// Ruta protegida
UserRoute.get('/protected', authenticateToken, (req: Request, res: Response) : Response => {
    return res.json({ message: 'Protected route', user: req.user });
});

export {UserRoute};