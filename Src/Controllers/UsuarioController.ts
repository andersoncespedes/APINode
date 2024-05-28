const { Usuario } = require("../db.js");
import { Where } from "sequelize/types/utils.js";
import { IUsuario, UsuarioDto } from "../Interface/IUsuario.js";
const bcrypt = require('bcrypt');
export async function ExistsUser(username: string, password: string) {
    let data = await Usuario.findOne({ Where: { nombre: username } });
    if (data != null) {
        let al = await bcrypt.compare(password, data.password);
       
        return al;
    }
    return false;

}
export async function CreateOne(username: string, email: string, password: string): Promise<boolean> {
    const { count, rows } = await Usuario.findAndCountAll({ where: { nombre: username } });
    bcrypt.hash(password, 10, async (err: Error, hash: any) => {
        if (err) {
            console.error('Error al hashear la contraseña:', err);
            return;
        }
        console.log(`La contraseña hasheada es: ${hash}`);
        if (count == 0) {
            const user = await Usuario.create
                (
                    {
                        nombre: username,
                        correo: email,
                        password: hash
                    }
                );
        }
    });

    return true;

}