import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";


const registerCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser(body);
    return res.send(responseUser);
}

const loginCtrl = async ({body}: Request, res: Response) => {
    const responseLogin = await loginUser(body);
    return res.send(responseLogin);
}

export { registerCtrl, loginCtrl };