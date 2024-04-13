"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoute = void 0;
const express_1 = require("express");
const ClienteHandler_1 = require("../Handlers/ClienteHandler");
const ClienteRoute = (0, express_1.Router)();
exports.ClienteRoute = ClienteRoute;
ClienteRoute.get("/", ClienteHandler_1.ShowClients);
