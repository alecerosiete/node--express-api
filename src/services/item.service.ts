import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/items.model";


const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

const getCars = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem;
}

const getCar = async (id: string) => {
    let responseItem = null;
    try{
        responseItem = await ItemModel.findById(id);
    }catch(e){       
        responseItem = {"status" : "ERROR", "message" : "Argument is not valid"};
    }    
    return responseItem;
}

const updateCar = async (id: any, data: Car) => {

    const responseItem = await ItemModel.findByIdAndUpdate(id, data, { new: true });

    return responseItem;
}

const deleteCar = async (id: String) => {
    const responseItem = await ItemModel.findByIdAndDelete(id);

    return responseItem;
}


export { insertCar, getCars, getCar, updateCar, deleteCar };