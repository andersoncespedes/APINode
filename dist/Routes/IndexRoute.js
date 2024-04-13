"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductoRoute_1 = require("./ProductoRoute");
const ClienteRoute_1 = require("./ClienteRoute");
const Route = (0, express_1.Router)();
Route.use("/Producto", ProductoRoute_1.ProductosRoute);
Route.use("/Cliente", ClienteRoute_1.ClienteRoute);
exports.default = Route;
