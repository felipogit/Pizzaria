import { Request, Response } from "express";
import { ListaOrdersService } from "../../services/order/ListOrdersService";

class ListOrdesController{
    async handle(req: Request, res: Response){
        const listaOrdersService = new ListaOrdersService()

        const orders = await listaOrdersService.execute();

        return res.json(orders)
    }
}

export{ListOrdesController}
