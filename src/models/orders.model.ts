import { Schema, model, Model } from "mongoose";
import { Orders } from "../interfaces/order.interface";

const OrderSchema = new Schema<Orders>(
    {
        username :{
            type: String,
        },

        brand: {
            type: String,
            required: true
        },
        model: {
            type: String
        },
        color: {
            type: String
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const OrdersModel = model("orders", OrderSchema);

export default OrdersModel;