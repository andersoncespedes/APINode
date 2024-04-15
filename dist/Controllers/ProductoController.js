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
exports.UpdateOneProduct = exports.GetOneProduct = exports.destroy = exports.CreateOne = exports.List = void 0;
const { Productos } = require("../db.js");
function UUIDValidator(idProd) {
    if (idProd != undefined)
        return /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i.test(idProd);
    else
        return false;
}
function List() {
    return __awaiter(this, void 0, void 0, function* () {
        const list = yield Productos.findAll();
        return list;
    });
}
exports.List = List;
function CreateOne(entity) {
    return __awaiter(this, void 0, void 0, function* () {
        const save = yield Productos.create(entity);
        return save;
    });
}
exports.CreateOne = CreateOne;
function destroy(idProd) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!UUIDValidator(idProd)) {
            throw new Error("BAD REQUEST");
        }
        const product = yield Productos.findOne({ where: { id: idProd } });
        if (product == null) {
            throw new Error("NOT FOUND");
        }
        yield Productos.destroy({
            where: {
                id: idProd
            }
        });
        return true;
    });
}
exports.destroy = destroy;
function GetOneProduct(idProd) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!UUIDValidator(idProd)) {
            throw new Error("BAD REQUEST");
        }
        const product = yield Productos.findOne({ where: { id: idProd } });
        if (product == null) {
            throw new Error("NOT FOUND");
        }
        return product;
    });
}
exports.GetOneProduct = GetOneProduct;
function UpdateOneProduct(producto, idProd) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!UUIDValidator(idProd)) {
            throw new Error("BAD REQUEST");
        }
        const product = yield Productos.findOne({ where: { id: idProd } });
        if (product == null) {
            throw new Error("NOT FOUND");
        }
        yield Productos.update(producto, {
            where: {
                id: idProd
            }
        });
        return product;
    });
}
exports.UpdateOneProduct = UpdateOneProduct;
