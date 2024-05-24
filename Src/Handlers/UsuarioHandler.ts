import express, { Request, Response } from 'express';
import { ExistsUser, CreateOne } from '../Controllers/UsuarioController.js';
import { StatusCodes } from 'http-status-codes';
const { secretKey, expiresIn } = require('../config');
const jwt = require("jsonwebtoken");


export async function LoginUser(reqest: Request, response: Response): Promise<Response> {
    const { username, password } = reqest.body;
    console.log(reqest.body.username);
    const respuesta = await ExistsUser(username, password);
    const user = { username }; // Ejemplo de usuario autenticado
    const token = jwt.sign(user, secretKey, { expiresIn });
    return response.json({ token });
}
export async function RegisterUser(reqest: Request, response: Response): Promise<Response> {
        const { username, email, password, passwordConfirmation } = reqest.body;
        if (password != passwordConfirmation) {
            return response.status(StatusCodes.BAD_REQUEST).send(
                {
                    success: false,
                    messagge: "Bad Request",
                    data: null
                }
            )
        } else {
            const valor: boolean = await CreateOne(username, email, password);

            return response.status(StatusCodes.OK).send(
                {
                    success: false,
                    messagge: "Bad Request",
                    data: null
                }
            );
        }

        return response.status(StatusCodes.BAD_REQUEST).send(
            {
                success: false,
                messagge: "Bad Request",
                data: null
            });
    }

