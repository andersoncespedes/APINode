import express, { Request, Response, Router } from 'express';
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require('../config');
import { authenticateToken } from '../Middleware/JwtBearer';

const UserRoute = Router();

// Ruta para generar un token
UserRoute.post('/login', (req: Request, res: Response) : Response => {
    const { username, password } = req.body;
    // Aquí deberías autenticar al usuario
    const user = { username }; // Ejemplo de usuario autenticado

    const token = jwt.sign(user, secretKey, { expiresIn });
    return res.json({ token });
});

// Ruta protegida
UserRoute.get('/protected', authenticateToken, (req: Request, res: Response) : Response => {
    return res.json({ message: 'Protected route', user: req.user });
});

export {UserRoute};