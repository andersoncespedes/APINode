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
exports.DeleteOne = exports.Create = exports.Show = void 0;
const http_status_codes_1 = require("http-status-codes");
const ProductoController_1 = require("../Controllers/ProductoController");
function Show(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = yield (0, ProductoController_1.List)();
        return response
            .status(http_status_codes_1.StatusCodes.OK)
            .send({
            success: true,
            messagge: "Fetched Products",
            data: list
        });
    });
}
exports.Show = Show;
function Create(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, codigo, precio } = request.body;
        let entity = {
            nombre: nombre,
            codigo: codigo,
            precio: precio
        };
        const prod = yield (0, ProductoController_1.CreateOne)(entity);
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
function DeleteOne(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = request.params;
        let action = yield (0, ProductoController_1.destroy)(id);
        return response
            .status(http_status_codes_1.StatusCodes.NO_CONTENT).send();
    });
}
exports.DeleteOne = DeleteOne;
