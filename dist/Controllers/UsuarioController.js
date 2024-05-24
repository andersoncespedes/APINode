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
exports.CreateOne = exports.ExistsUser = void 0;
const { Usuario } = require("../db.js");
function ExistsUser(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(username);
        console.log(password);
    });
}
exports.ExistsUser = ExistsUser;
function CreateOne(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const { count, rows } = yield Usuario.findAndCountAll({ where: { nombre: username } });
        console.log(count);
        if (count == 0) {
            const user = yield Usuario.create({
                nombre: username,
                correo: email,
                password: password
            });
        }
        return true;
    });
}
exports.CreateOne = CreateOne;
