"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDto = void 0;
class ClienteDto {
    constructor(entity) {
        this.id = entity.id;
        this.cedula = entity.cedula;
        this.nombre = entity.nombre;
        this.apellido = entity.apellido;
        this.telefono = entity.telefono;
    }
    static list(entity) {
        let list = [];
        for (let i = 0; i < entity.length; i++) {
            let cliente = new ClienteDto(entity[i]);
            list[i] = cliente;
        }
        return list;
    }
}
exports.ClienteDto = ClienteDto;
