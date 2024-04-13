"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRoute = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const ClienteRoute = (0, express_1.Router)();
exports.ClienteRoute = ClienteRoute;
ClienteRoute.get("/", (request, response) => {
    return response.status(http_status_codes_1.StatusCodes.OK).send({
        success: true
    });
});
