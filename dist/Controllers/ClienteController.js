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
exports.CreateRelation = exports.CreateOne = exports.destroy = exports.GetOne = exports.listAll = void 0;
const sequelize_1 = require("sequelize");
const ICliente_1 = require("../Interface/ICliente");
const { Clientes, Productos } = require("../db.js");
function UUIDValidator(idProd) {
    if (idProd != undefined)
        return /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i.test(idProd);
    else
        return false;
}
function listAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const lista = ICliente_1.ClienteDto.list(yield Clientes.findAll());
        return lista;
    });
}
exports.listAll = listAll;
function GetOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!UUIDValidator(id)) {
            throw new Error("BAD REQUEST");
        }
        const data = new ICliente_1.ClienteDto(yield Clientes.findOne({ where: { id: id } }));
        if (data.apellido == null) {
            throw new Error("NOT FOUND");
        }
        return data;
    });
}
exports.GetOne = GetOne;
function destroy(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!UUIDValidator(id)) {
            throw new sequelize_1.QueryError("BAD REQUEST");
        }
        console.log("hola");
        const entity = new ICliente_1.ClienteDto(yield Clientes.findOne({ where: { id: id } }));
        console.log(entity);
        if (entity.apellido == null) {
            throw new Error("NOT FOUND");
        }
        yield Clientes.destroy({ where: { id: id } });
        return entity;
    });
}
exports.destroy = destroy;
function CreateOne(entity) {
    return __awaiter(this, void 0, void 0, function* () {
        const save = yield Clientes.create(entity);
        return save;
    });
}
exports.CreateOne = CreateOne;
function CreateRelation(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!UUIDValidator(id)) {
            throw new sequelize_1.QueryError("BAD REQUEST");
        }
        const data = yield Clientes.findOne({ where: { id: id } });
        const data2 = yield Productos.findOne({ where: { id: "f7c97357-b2da-4baf-a62c-e329c1e9f9f8" } });
        console.log(yield data);
        yield data.addProductos(data2);
    });
}
exports.CreateRelation = CreateRelation;
