"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    console.log("Middleware excecuted..");
    next();
};
exports.logMiddleware = logMiddleware;
