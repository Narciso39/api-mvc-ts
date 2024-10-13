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
    this.router.get("/", UserController.getAllUser);
    this.router.post("/add", UserController.addUser);
    this.router.post("/edit/:id", UserController.editUser);
    this.router.post("/destroy/:id", UserController.deleteUser);
  }
}



export default UserRoutes;
