"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoute_1 = require("./UserRoute");
const Route = (0, express_1.Router)();
Route.use("/User", UserRoute_1.UserRoute);
exports.default = Route;
