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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerNewUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerNewUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: data.email });
    if (user) {
        return { "status": "ERROR", "message": "User already exist!" };
    }
    const passwordHash = yield (0, bcrypt_handle_1.encrypt)(data.password);
    const register = yield user_model_1.default.create({
        email: data.email,
        name: data.name,
        password: passwordHash
    });
    return register;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        return { "status": "ERROR", "message": "User not exist!" };
    }
    const passwordHash = user.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    const token = (0, jwt_handle_1.generateToken)(user.id);
    let response = {};
    if (isCorrect) {
        response = { "status": "OK", "message": "User is authenticated!", "jwt": token };
    }
    else {
        response = { "status": "ERROR", "message": "User or password is incorrect!" };
    }
    return response;
});
exports.loginUser = loginUser;
