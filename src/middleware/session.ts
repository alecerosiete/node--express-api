import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    let response = {};

    try {
        const jwtByUser = req.headers.authorization || "";
        
        const jwt = jwtByUser.split(" ").pop();
        const verifyUserToken = verifyToken(`${jwt}`);
        if(verifyUserToken){

            next();
        }else{
            response = {"status": "ERROR", "message":"Session not valid!"}
            return response;
        }
    } catch (error) {
        res.status(400);

        res.send({"status":"ERROR", "message":error})
    }
}

export {checkJwt};