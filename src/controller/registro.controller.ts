import { Request, Response } from "express";
import { RegistroService } from "../services/registro.service";
import { AuthPayload } from "../tipos/auth.payload";

const registroService = new RegistroService();

export class RegistroController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;

        const user = res.locals.user as AuthPayload;

        await registroService.create(dados,user.id);
        res.status(200).send();
    }

    async delete(req: Request, res: Response)
    {
        const id = Number(req.params.id);

        const user = res.locals.user as AuthPayload;

        await registroService.delete(id, user.id);
        res.status(200).send();
    }

    async update(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const dados = req.body;
        const user = res.locals.user as AuthPayload;
        await registroService.update(id, user.id, dados);
        res.status(200).send();
    }

    async findAll(req:Request, res:Response)
    {
        const user = res.locals.user as AuthPayload;
        const registros = await registroService.findAll(user.id);
        res.status(200).json(registros);
    }

    async findById(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const user = res.locals.user as AuthPayload;
        const registro = await registroService.findById(id, user.id);
        res.status(200).json(registro);
    }

}