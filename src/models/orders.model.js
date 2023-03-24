"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    username: {
        type: String,
    },
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
const OrdersModel = (0, mongoose_1.model)("orders", OrderSchema);
exports.default = OrdersModel;
