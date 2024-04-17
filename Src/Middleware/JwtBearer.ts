import { NextFunction, Response, Request } from "express";

const jwt = require("jsonwebtoken");
const config = require("../config");
function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, config.secretKey, (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = Usuario;
        next();
    });
}

export { authenticateToken };