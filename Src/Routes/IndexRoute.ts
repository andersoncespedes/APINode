import { Router } from "express";
import { ProductosRoute } from "./ProductoRoute";
import { ClienteRoute } from "./ClienteRoute";
import { UserRoute } from "./UserRoute";
const Route : Router = Router();
Route.use("/Producto",ProductosRoute);
Route.use("/Cliente", ClienteRoute);
Route.use("/User", UserRoute);
export default Route;