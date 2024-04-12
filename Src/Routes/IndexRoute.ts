import { Router } from "express";
import { UserRoute } from "./UserRoute";
const Route : Router = Router();
Route.use("/User",UserRoute);
export default Route;