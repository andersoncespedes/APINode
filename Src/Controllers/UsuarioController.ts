const { Usuario } = require("../db.js");
import { Where } from "sequelize/types/utils.js";
import { IUsuario, UsuarioDto } from "../Interface/IUsuario.js";
export async function ExistsUser(username: string, password: string) {
    console.log(username);
    console.log(password);

}
export async function CreateOne(username: string, email: string, password: string): Promise<boolean> {
    const { count, rows } = await Usuario.findAndCountAll({ where: { nombre: username } });
    console.log(count);
    if (count == 0) {
        const user = await Usuario.create
            (
                {
                    nombre: username,
                    correo: email,
                    password: password
                }
            );
    }
    return true;

}