import { Router } from "express";
import UserController from "../controllers/UserController"; // Verifique o caminho

const router = Router();

router.get("/all", UserController.getAllUser);

export default router;
