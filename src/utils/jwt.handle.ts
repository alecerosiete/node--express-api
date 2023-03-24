import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "token";

const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2h"
    });  
    return jwt;
}

const verifyToken = (jwt:string) => {  
    const isOk = verify(jwt, JWT_SECRET);   
    return isOk;
}

const getUserData = (authorizationHeader:string) => {
    const jwtByUser = authorizationHeader;
        
    const jwt = jwtByUser.split(" ").pop();
    const token = verifyToken(`${jwt}`);

    return token;
}

export { generateToken, verifyToken, getUserData};
