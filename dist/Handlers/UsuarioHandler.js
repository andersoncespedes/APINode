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
exports.RegisterUser = exports.LoginUser = void 0;
const UsuarioController_js_1 = require("../Controllers/UsuarioController.js");
const http_status_codes_1 = require("http-status-codes");
const { secretKey, expiresIn } = require('../config');
const jwt = require("jsonwebtoken");
function LoginUser(reqest, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, password } = reqest.body;
        console.log(reqest.body.username);
        const respuesta = yield (0, UsuarioController_js_1.ExistsUser)(username, password);
        console.log(respuesta);
        if (respuesta) {
            const user = { username };
            const token = jwt.sign(user, secretKey, { expiresIn });
            return response.json({ token });
        }
        return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
            success: false,
            messagge: "Bad Request",
            data: null
        });
    });
}
exports.LoginUser = LoginUser;
function RegisterUser(reqest, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, email, password, passwordConfirmation } = reqest.body;
        if (password != passwordConfirmation) {
            return response.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
                success: false,
                messagge: "Bad Request",
                data: null
            });
        }
        else {
            const valor = yield (0, UsuarioController_js_1.CreateOne)(username, email, password);
            return response.status(http_status_codes_1.StatusCodes.OK).send({
                success: false,
                messagge: "Bad Request",
                data: null
            });
        }
    });
}
exports.RegisterUser = RegisterUser;
