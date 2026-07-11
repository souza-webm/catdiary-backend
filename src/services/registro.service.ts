import { prisma } from "../prisma/client";

export class RegistroService{

    async create(dados: {titulo: string; descricao: string;}, userId: number)
    {
        await prisma.registro.create({
            data: {
                ...dados,
                userId,
            }
        });
    }

    async delete(id: number, userId:number)
    {
        await prisma.registro.delete({
            where: {
                id,
                userId,
            }
        });
    }

    async findAll(userId: number)
    {
        return await prisma.registro.findMany({
            where: {
                userId
            }
        });
    }

    async findById(id: number, userId: number)
    {
        return await prisma.registro.findUnique({
            where: {
                id,
                userId
            }
        });
    }

    async update(id:number, userId: number, dados: {titulo: string; descricao: string;})
    {
        await prisma.registro.update({
            where:{
                id,
                userId
            },
            data: dados,
        });
    }

}