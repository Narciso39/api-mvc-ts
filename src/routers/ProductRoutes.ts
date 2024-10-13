import { Router } from "express";
import ProductController from "../controllers/ProductController";

class ProductRoutes {
    public router: Router;
    constructor() {
      this.router = Router();
      this.routes();
    }
    private routes(): void {
      this.router.get("/", ProductController.getAllProduct);
      this.router.post("/add", ProductController.addNewProduct);
    }
  }

  export default ProductRoutes;