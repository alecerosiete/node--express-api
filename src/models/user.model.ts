import { Schema, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";


const userSchema = new Schema<User>(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        active: {
            type: Boolean
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

const UserModel = model("users", userSchema);

export default UserModel;