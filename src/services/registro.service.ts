import { prisma } from "../prisma/client";

export class RegistroService{

    async create(dados: {titulo: string; descricao: string;})
    {
        await prisma.registro.create({
            data: dados,
        });
    }

    async delete(id: number)
    {
        await prisma.registro.delete({
            where: {id}
        });
    }

    async findAll()
    {
        return await prisma.registro.findMany();
    }

    async findById(id: number)
    {
        return await prisma.registro.findUnique({
            where: {id}
        });
    }

    async update(id:number, dados: {titulo: string; descricao: string;})
    {
        await prisma.registro.update({
            where:{id},
            data: dados,
        });
    }

}