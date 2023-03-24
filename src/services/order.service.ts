import OrdersModel from "../models/orders.model";

const findAllOrders = async () => {
    const orders = await OrdersModel.find()

    if (!orders) {
        return { "status": "ERROR", "message": "Orders not found!" };
    }
 
    return orders;
}



export { findAllOrders};