"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: "root",
    password: "",
    database: "crud",
};
const db = (0, mysql2_1.createPool)(dbConfig);
exports.default = db;
