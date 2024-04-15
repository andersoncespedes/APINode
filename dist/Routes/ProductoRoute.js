"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosRoute = void 0;
const express_1 = require("express");
const ProductoHandler_1 = require("../Handlers/ProductoHandler");
const ProductosRoute = (0, express_1.Router)();
exports.ProductosRoute = ProductosRoute;
ProductosRoute.get("/", (req, res) => (0, ProductoHandler_1.Show)(req, res));
ProductosRoute.get("/:id", (req, res) => (0, ProductoHandler_1.GetOne)(req, res));
ProductosRoute.delete("/:id", (req, res) => (0, ProductoHandler_1.DeleteOne)(req, res));
ProductosRoute.post("/", (req, res) => (0, ProductoHandler_1.Create)(req, res));
ProductosRoute.put("/:id", (req, res) => (0, ProductoHandler_1.UpdateOne)(req, res));
