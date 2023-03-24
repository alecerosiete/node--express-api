"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const upload_1 = require("../controllers/upload");
const file_1 = __importDefault(require("../middleware/file"));
const router = (0, express_1.Router)();
exports.router = router;
router.post("/", file_1.default.single('myfile'), upload_1.getFile);
