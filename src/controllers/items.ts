import { Request, Response } from "express";
import { getCars, insertCar, getCar, updateCar, deleteCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const {id} = params;        
        const responseCar = await getCar(id);
        const data = responseCar || {'status': 'ERROR', 'message' : 'NOT_FOUND'};
        res.send(data);
    } catch (error) {
        handleHttp(res, "Ocurrio un error en GET getItem : " + error);
    }

}

const getItems = async (req: Request, res: Response) => {
    try {
        const items = await getCars();
        res.send(items);
    } catch (error) {
        handleHttp(res, "Ocurrio un error en GET getItems " + error);
    }
}

const postItem = async ({ body }: Request, res: Response) => {

    try {
        const responseInsert = await insertCar(body);
        res.send(responseInsert);
    } catch (error) {
        handleHttp(res, "Ocurrio un error en GET postItem " + error);
    }
}

const updateItem = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;        
        const responseUpdate = await updateCar(id, body);
        res.send(responseUpdate);
    } catch (error) {
        handleHttp(res, "Ocurrio un error en updateItem "+error);
    }
}

const deleteItem = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        
        const responseDelete = await deleteCar(id);
        res.send(responseDelete);
    } catch (error) {
        handleHttp(res, "Ocurrio un error en DELETE "+error);
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem };