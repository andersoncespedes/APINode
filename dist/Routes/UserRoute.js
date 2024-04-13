"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const ProductoHandler_1 = require("../Handlers/ProductoHandler");
const UserRoute = (0, express_1.Router)();
exports.UserRoute = UserRoute;
UserRoute.get("/", (req, res) => (0, ProductoHandler_1.Show)(req, res));
