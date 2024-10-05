"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
dotenv_1.default.config();
app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));
