"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowOne = exports.ShowClients = void 0;
const http_status_codes_1 = require("http-status-codes");
const ClienteController_1 = require("../Controllers/ClienteController");
function ShowClients(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = yield (0, ClienteController_1.listAll)();
        return response.status(http_status_codes_1.StatusCodes.OK).send({
            success: true,
            messagge: "Fetched Clients",
            data: list
        });
    });
}
exports.ShowClients = ShowClients;
function ShowOne(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.params;
        const data = yield (0, ClienteController_1.GetOne)(parseInt(id));
        if (data == null) {
            return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
                success: false,
                messagge: "Fetched client",
                data: data
            });
        }
        return response.status(http_status_codes_1.StatusCodes.OK).send({
            success: true,
            messagge: "Fetched client",
            data: data
        });
    });
}
exports.ShowOne = ShowOne;
