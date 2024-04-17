import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: any; // Puedes reemplazar `any` con el tipo correcto si lo conoces
        }
    }
}