"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const jwt = require("jsonwebtoken");
const { secretKey, expiresIn } = require('../config');
const JwtBearer_1 = require("../Middleware/JwtBearer");
const UserRoute = (0, express_1.Router)();
exports.UserRoute = UserRoute;
// Ruta para generar un token
UserRoute.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Aquí deberías autenticar al usuario
    const user = { username }; // Ejemplo de usuario autenticado
    const token = jwt.sign(user, secretKey, { expiresIn });
    return res.json({ token });
});
// Ruta protegida
UserRoute.get('/protected', JwtBearer_1.authenticateToken, (req, res) => {
    return res.json({ message: 'Protected route', user: req.user });
});
