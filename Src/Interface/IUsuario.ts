export interface IUsuario
{
    id : number,
    nombre : string,
    correo : string,
    password: string
}
export class UsuarioDto implements IUsuario
{
    public id: number;
    public nombre: string;
    public correo: string;
    public password: string;
    constructor(entidad : IUsuario){
        this.id = entidad.id;
        this.correo = entidad.correo;
        this.nombre = entidad.nombre;
        this.password = entidad.password;
    }
}