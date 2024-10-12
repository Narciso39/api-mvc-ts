import { Router } from "express";
import UserController from "../controllers/UserController"; // Verifique o caminho

// rotas de  usuários
class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.get("/api/userall", UserController.getAllUser);
    this.router.post("/api/addUser", UserController.addUser);
    this.router.post("/api/editUser/:id", UserController.editUser);
    this.router.post("/api/destroyUser/:id", UserController.deleteUser);
  }
}

export default new UserRoutes().router;
