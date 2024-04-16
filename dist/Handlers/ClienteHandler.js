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
exports.DeleteOne = exports.CreateWithProd = exports.ShowOne = exports.Create = exports.ShowClients = void 0;
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
function Create(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, apellido, cedula, telefono } = request.body;
        let entity = {
            nombre: nombre,
            apellido: apellido,
            cedula: cedula,
            telefono: telefono
        };
        const prod = yield (0, ClienteController_1.CreateOne)(entity);
        return response
            .status(http_status_codes_1.StatusCodes.CREATED)
            .send({
            success: true,
            messagge: "created",
            data: prod
        });
    });
}
exports.Create = Create;
function ShowOne(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const data = yield (0, ClienteController_1.GetOne)(id);
            return response.status(http_status_codes_1.StatusCodes.OK).send({
                success: true,
                messagge: "Fetched client",
                data: data
            });
        }
        catch (error) {
            switch (error.message) {
                case ("NOT FOUND"):
                    return response.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
                        success: false,
                        messagge: "Client Not Found",
                    });
                    break;
                case ("BAD REQUEST"):
                    return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
                        success: false,
                        messagge: "BAD REQUEST",
                    });
                default:
                    return response.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                        success: false,
                        messagge: "Client Not Found",
                    });
            }
        }
    });
}
exports.ShowOne = ShowOne;
function CreateWithProd(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.params;
        yield (0, ClienteController_1.CreateRelation)(id);
        return response
            .status(http_status_codes_1.StatusCodes.CREATED)
            .send({
            success: true,
            messagge: "created",
            data: null
        });
    });
}
exports.CreateWithProd = CreateWithProd;
function DeleteOne(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const data = yield (0, ClienteController_1.destroy)(id);
            if (data.apellido == null) {
                throw new Error("NOT FOUND");
            }
            return response.status(http_status_codes_1.StatusCodes.NO_CONTENT).send({
                success: true,
                messagge: "Fetched client",
            });
        }
        catch (error) {
            switch (error.message) {
                case ("NOT FOUND"):
                    return response.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({
                        success: false,
                        messagge: "Client Not Found",
                    });
                    break;
                case ("BAD REQUEST"):
                    return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
                        success: false,
                        messagge: "BAD REQUEST",
                    });
                default:
                    return response.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({
                        success: false,
                        messagge: "Client Not Found",
                    });
            }
        }
    });
}
exports.DeleteOne = DeleteOne;
