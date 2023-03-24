"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = void 0;
const storage_service_1 = require("../services/storage.service");
const jwt_handle_1 = require("../utils/jwt.handle");
const getFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const headerToken = req.headers.authorization || '';
        const user = (0, jwt_handle_1.getUserData)(headerToken);
        const fileData = {
            fileName: `${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`,
            path: `${(_b = req.file) === null || _b === void 0 ? void 0 : _b.path}`,
            idUser: `${user === null || user === void 0 ? void 0 : user.id}`
        };
        const responseUpload = yield (0, storage_service_1.registerUpload)(fileData);
        res.send({ "status": "OK", "message": "File uploaded!", "data": responseUpload });
    }
    catch (error) {
        res.status(500);
        res.send({ "status": "ERROR", "message": error });
    }
});
exports.getFile = getFile;
