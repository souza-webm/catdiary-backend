import { Request, Response } from "express";
import { RegistroService } from "../services/registro.service";

const registroService = new RegistroService();

export class RegistroController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;
        await registroService.create(dados);
        res.status(200).send();
    }

    async delete(req: Request, res: Response)
    {
        const id = Number(req.params.id);
        await registroService.delete(id);
        res.status(200).send();
    }

    async update(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const dados = req.body;
        await registroService.update(id,dados);
        res.status(200).send();
    }

    async findAll(req:Request, res:Response)
    {
        const filmes = await registroService.findAll();
        res.status(200).json(filmes);
    }

    async findById(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const filme = await registroService.findById(id);
        res.status(200).json(filme);
    }

}