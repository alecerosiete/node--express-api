import { Schema, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage.interface";


const storageSchema = new Schema<Storage>(
    {
        fileName:{
            type: String,
            required: true
        },
        idUser : {
            type: String
        },
        path:{
            type:String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const StorageModel = model("storage", storageSchema);

export default StorageModel;