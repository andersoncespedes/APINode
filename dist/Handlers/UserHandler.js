"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Show = void 0;
const http_status_codes_1 = require("http-status-codes");
function Show(request, response) {
    return response.status(http_status_codes_1.StatusCodes.OK).json({ Mensaje: "Hola" });
}
exports.Show = Show;
