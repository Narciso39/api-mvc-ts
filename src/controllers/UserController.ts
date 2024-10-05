import UserModel from "../models/UserModel";
import { Request, Response, NextFunction } from "express";

class UserController {
  static async getAllUser(req: Request, res: Response) {
    try {
      const result = await UserModel.getUsers();
      res.json(result);
      console.log("chegou a requisição");
    } catch (e) {
      console.error("Error fetching users:", e);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default UserController;
