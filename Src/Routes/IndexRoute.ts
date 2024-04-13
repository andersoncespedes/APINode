import { Router } from "express";
import { ProductosRoute } from "./ProductoRoute";
import { ClienteRoute } from "./ClienteRoute";
const Route : Router = Router();
Route.use("/Producto",ProductosRoute);
Route.use("/Cliente",ClienteRoute);

export default Route;