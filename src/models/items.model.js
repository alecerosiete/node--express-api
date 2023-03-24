"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ItemSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String
    },
    color: {
        type: String
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
const ItemModel = (0, mongoose_1.model)("items", ItemSchema);
exports.default = ItemModel;
