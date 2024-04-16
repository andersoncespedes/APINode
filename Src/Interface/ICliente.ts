export interface ICliente {
    id?: string;
    cedula: number;
    nombre: string;
    apellido: string;
    telefono: number;
}
export class ClienteDto implements ICliente{
    public id?: string | undefined;
    public cedula: number;
    public nombre: string;
    public apellido: string;
    public telefono: number;
    constructor(entity : ICliente){
        this.id = entity.id;
        this.cedula = entity.cedula;
        this.nombre = entity.nombre;
        this.apellido = entity.apellido;
        this.telefono = entity.telefono;
    }
    static list(entity : ICliente[]) : ICliente[]{
        
        let list : ICliente[] = [];
        for(let i : number = 0 ; i < entity.length; i++ ){
            let cliente : ClienteDto = new ClienteDto(entity[i]);
            list[i] = cliente;
        }
        return list;
    }
}