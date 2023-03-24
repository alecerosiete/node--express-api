"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const storageSchema = new mongoose_1.Schema({
    fileName: {
        type: String,
        required: true
    },
    idUser: {
        type: String
    },
    path: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
const StorageModel = (0, mongoose_1.model)("storage", storageSchema);
exports.default = StorageModel;
