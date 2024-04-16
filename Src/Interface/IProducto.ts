import { ICliente } from "./ICliente";

export interface IProducto {
    id?: string;
    nombre: string;
    codigo: string;
    precio: number;
    cliente?: ICliente[]
}
export class ProductoDto implements IProducto{
    public id?: string | undefined;
    public nombre: string;
    public codigo: string;
    public precio: number;
    public cliente?: ICliente[] | undefined;
    constructor(entidad : IProducto) {
        this.cliente = entidad.cliente;
        this.nombre = entidad.nombre;
        this.codigo = entidad.codigo;
        this.precio = entidad.precio;
    }
    static lista(entity : IProducto[]) : IProducto[]{
        let lista : IProducto[] = [];
        entity.forEach((e,i) => {
            let prod = new ProductoDto(e);
            lista[i] = prod;
        });
        return lista;
    }
}