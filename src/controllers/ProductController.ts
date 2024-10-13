import { Request, Response, NextFunction } from "express";
import ProductModel from "../models/ProductController";

class ProductController {
  static async getAllProduct(req: Request, res: Response): Promise<void> {
    try {
      const resultGetProducts = await ProductModel.selectAll();
      res.json(resultGetProducts);
    } catch (e) {
      res.status(500).send("Erro Interno do Servidor");
    }
  }

  static async addNewProduct(req: Request, res: Response): Promise<void> {
    try {
      const { name, price, sku, stock } = req.body;
      if (!name || !price || !sku || !stock) {
        res.status(400).send("Bad Request: Campos obrigatórios ausentes");
        return;
      }
      const resultPostNewProduct = await ProductModel.insertProduct(
        name,
        price,
        sku,
        stock
      );
      res.status(201).json({
        message: "produto criado com sucesso",
        resultPostNewProduct,
      });
    } catch (e) {
      console.error("Erro ao criar produto:", e);
      res.status(500).send("Erro Interno do Servidor");
    }
  }

  static async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const { name, price, sku, stock } = req.body;
      const resultUpdateProduct = await ProductModel.updateProduct(
        id,
        name,
        price,
        sku,
        stock
      );

      if (resultUpdateProduct) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "produto não encontrado" });
      }
    } catch (e) {
        console.error("Erro ao editar produto:", e);
        res.status(500).send("Erro Interno do Servidor");
    }
  }
}

export default ProductController;
