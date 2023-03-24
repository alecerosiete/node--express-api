import { Request, response, Response } from "express";
import { Jwt } from "jsonwebtoken";
import dbConnect from "../config/mongo";
import { User } from "../interfaces/user.interface";
import { registerUpload } from "../services/storage.service";
import { handleHttp } from "../utils/error.handle";
import { getUserData } from "../utils/jwt.handle";

const getFile = async (req: Request, res: Response) => {
    try {
        const headerToken = req.headers.authorization||'';
        const user = getUserData(headerToken) as {id: String};
        const fileData = {
            fileName: `${req.file?.filename}`,
            path: `${req.file?.path}`,
            idUser: `${user?.id}`
        }
        const responseUpload = await registerUpload(fileData);
        res.send({ "status": "OK", "message": "File uploaded!", "data":responseUpload });
    } catch (error) {
        res.status(500);
        res.send({"status": "ERROR", "message": error });
    }
}

export { getFile };