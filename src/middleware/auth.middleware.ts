import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { AuthPayload } from "../tipos/auth.payload";


export function authMiddleware(req: Request, res: Response, next: NextFunction)
{
    const token = req.cookies.token;

    if(!token)
    {
        return res.json(400).json({
            message: "Token não encontrado"
        })
    }

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as 
        AuthPayload

        res.locals.user = payload;

        next()

    }catch(error){
        return res.status(401).json({
            message: "Token inválido"
        })
    }
}