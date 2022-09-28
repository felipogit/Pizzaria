import { prisma } from "@prisma/client";
import prismaClient from "../../prisma";

class ListaOrdersService{
    async execute(){

        const ordes = await prismaClient.order.findMany({
            where:{
                draft:false,
                status: false,
            },
            orderBy:{
                created_at: 'desc'
            }
        })

        return ordes;

    }
}


export { ListaOrdersService }