import UserModel from "../models/UserModel";
import { Request, Response, NextFunction } from "express";

class UserController {
  static async getAllUser(req: Request, res: Response): Promise<void> {
    try {
      const result = await UserModel.getUsers();
      res.json(result);
      console.log("chegou a requisição");
    } catch (e) {
      console.error("Error fetching users:", e);
      res.status(500).send("Erro Interno do Servidor");
    }
  }

  static async addUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, name } = req.body;
      if (!email || !password || !name) {
         res
          .status(400)
          .send("Bad Request: Campos obrigatórios ausentes");
          return;
      }

      const result = await UserModel.addNewUser(email, password, name);
      res.status(201).json({
        message: "Usuário criado com sucesso",
        result,
      });
    } catch (e) {
      console.error("Erro ao criar usuário:", e);
      res.status(500).send("Erro Interno do Servidor");
    }
  }

  static async editUser(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const { email, password, name } = req.body;
      const result = await UserModel.edit(id, email, password, name);

      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (e) {
      console.error("Erro ao editar o usuário", e);
      res.status(500).send("Erro");
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const result = await UserModel.delete(id);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Usuário não encontrado" });
      }
    } catch (e) {
      console.error("Erro ao deletar o usuário", e);
      res.status(500).send("Erro");
    }
  }
}

export default UserController;
