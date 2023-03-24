import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { findAllOrders } from "../services/order.service";
import { verifyToken } from "../utils/jwt.handle";

const getOrders = async (req: Request, res: Response) => {
    try {

        const { id } = req.params;
        const responseOrders = await findAllOrders();
        const data = { "status": "OK", "data": responseOrders}
        res.send(data);
    } catch (error) {
        handleHttp(res, "Ocurrio un error en GET getItem : " + error);
    }

}


export { getOrders };