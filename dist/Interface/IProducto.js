"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoDto = void 0;
class ProductoDto {
    constructor(entidad) {
        this.cliente = entidad.cliente;
        this.nombre = entidad.nombre;
        this.codigo = entidad.codigo;
        this.precio = entidad.precio;
    }
    static lista(entity) {
        let lista = [];
        entity.forEach((e, i) => {
            let prod = new ProductoDto(e);
            lista[i] = prod;
        });
        return lista;
    }
}
exports.ProductoDto = ProductoDto;
