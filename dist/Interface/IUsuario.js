"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDto = void 0;
class UsuarioDto {
    constructor(entidad) {
        this.id = entidad.id;
        this.correo = entidad.correo;
        this.nombre = entidad.nombre;
        this.password = entidad.password;
    }
}
exports.UsuarioDto = UsuarioDto;
