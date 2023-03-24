"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    let response = {};
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const verifyUserToken = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (verifyUserToken) {
            next();
        }
        else {
            response = { "status": "ERROR", "message": "Session not valid!" };
            return response;
        }
    }
    catch (error) {
        res.status(400);
        res.send({ "status": "ERROR", "message": error });
    }
};
exports.checkJwt = checkJwt;
