import express, { Request, Response, NextFunction } from "express";
import UserController from "src/controllers/UserController";
export const route = express.Router();


route.get("/all", UserController.getAllUser);