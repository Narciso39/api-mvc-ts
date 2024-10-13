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
      this.router.post("/edit/:id", ProductController.updateProduct);
      this.router.post("/destroy/:id", ProductController.destroyProduct);
    }
  }

  export default ProductRoutes;