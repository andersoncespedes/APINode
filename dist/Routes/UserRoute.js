"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const UsuarioHandler_js_1 = require("../Handlers/UsuarioHandler.js");
const jwt = require("jsonwebtoken");
const JwtBearer_1 = require("../Middleware/JwtBearer");
const { Usuario } = require("../db.js");
const UserRoute = (0, express_1.Router)();
exports.UserRoute = UserRoute;
// Ruta para generar un token
UserRoute.post('/login', UsuarioHandler_js_1.LoginUser);
UserRoute.post("/register", UsuarioHandler_js_1.RegisterUser);
// Ruta protegida
UserRoute.get('/protected', JwtBearer_1.authenticateToken, (req, res) => {
    return res.json({ message: 'Protected route', user: req.user });
});
