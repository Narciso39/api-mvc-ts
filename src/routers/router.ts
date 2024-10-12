import { Router } from "express";
import UserController from "../controllers/UserController"; // Verifique o caminho

const router = Router();

router.get("/api/all", UserController.getAllUser);

router.post("/api/add", UserController.addUser);

router.post("/api/edit/:id", UserController.editUser);

router.post("/api/destroy/:id", UserController.deleteUser);
export default router;
