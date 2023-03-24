import { Schema, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemSchema = new Schema<Car>(
    {

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

const ItemModel = model("items", ItemSchema);

export default ItemModel;