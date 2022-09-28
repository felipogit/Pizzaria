import prismaClient from "../../prisma";

interface OrderRequest{
    table: string;
    name: string;
}

class CreateOrderService{
    async execute({ table, name}: OrderRequest){

        const order = await prismaClient.order.create({
            data:{
                table: table,
                name: name,
            }
        })
        
        return order;

    }
}

export { CreateOrderService }