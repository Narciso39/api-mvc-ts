import { Router } from "express";
import UserRoutes from "./UserRoutes";
import ProductRoutes from "./ProductRoutes";

const router = Router();


router.use("/api/user", new UserRoutes().router);


router.use("/api/product", new ProductRoutes().router);

export default router;
