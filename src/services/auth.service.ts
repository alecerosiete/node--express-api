import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (data: User) => {
    const user = await UserModel.findOne({ email: data.email })

    if (user) {
        return { "status": "ERROR", "message": "User already exist!" };
    }

    const passwordHash = await encrypt(data.password);

    const register = await UserModel.create({
        email: data.email,
        name : data.name,
        password: passwordHash
    });

    return register;
}

const loginUser = async ({email, password}: Auth) => {
    const user = await UserModel.findOne({ email })
    if (!user) {
        return { "status": "ERROR", "message": "User not exist!" };
    }

    const passwordHash = user.password;
    const isCorrect = await verified(password, passwordHash)
    
    const token = generateToken(user.id);    

    let response = {};

    if(isCorrect){
        response = {"status": "OK", "message":"User is authenticated!","jwt": token};
    }else{
        response = {"status": "ERROR" , "message": "User or password is incorrect!"};
    }
    return response;
}

export { registerNewUser, loginUser };