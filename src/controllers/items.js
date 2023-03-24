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
exports.deleteItem = exports.updateItem = exports.postItem = exports.getItems = exports.getItem = void 0;
const item_service_1 = require("../services/item.service");
const error_handle_1 = require("../utils/error.handle");
const getItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseCar = yield (0, item_service_1.getCar)(id);
        const data = responseCar || { 'status': 'ERROR', 'message': 'NOT_FOUND' };
        res.send(data);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Ocurrio un error en GET getItem : " + error);
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield (0, item_service_1.getCars)();
        res.send(items);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Ocurrio un error en GET getItems " + error);
    }
});
exports.getItems = getItems;
const postItem = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseInsert = yield (0, item_service_1.insertCar)(body);
        res.send(responseInsert);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Ocurrio un error en GET postItem " + error);
    }
});
exports.postItem = postItem;
const updateItem = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseUpdate = yield (0, item_service_1.updateCar)(id, body);
        res.send(responseUpdate);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Ocurrio un error en updateItem " + error);
    }
});
exports.updateItem = updateItem;
const deleteItem = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseDelete = yield (0, item_service_1.deleteCar)(id);
        res.send(responseDelete);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, "Ocurrio un error en DELETE " + error);
    }
});
exports.deleteItem = deleteItem;
