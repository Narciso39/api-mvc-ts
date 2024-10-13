import { Request, Response, NextFunction } from "express";
import ProductModel from "../models/ProductModel";

class ProductController {
  // metódo de retorno de todos os usúarios
  static async getAllProduct(req: Request, res: Response): Promise<void> {
    try {
      const resultGetProducts = await ProductModel.selectAll();
      res.json(resultGetProducts);
    } catch (e) {
      res.status(500).send("Erro Interno do Servidor");
    }
  }

  static async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const resultGetProductById = await ProductModel.selectThis(id);
      if (resultGetProductById) {
        res.json(resultGetProductById);
      } else {
        res.json({
          message: "produto inexistente",
        });
      }
    } catch (e) {
      res.status(500).send("Erro Interno do Servidor");
    }
  }
  static async getProductBySearch(req: Request, res: Response): Promise<any> {
    try {
        const { term } = req.query; 
        console.log("Termo de pesquisa:", term);
      if (!term || typeof term !== "string") {
        res.status(400).send("Bad Request: Termo de pesquisa ausente ou inválido");
        return;
      }
      const resultGetProductBySearch = await ProductModel.selectLike(term);
      console.log("Resultado da busca:", resultGetProductBySearch);
      res.json(resultGetProductBySearch) ;
    } catch (e) {
      console.error("Erro ao buscar produtos:", e);
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

  static async destroyProduct(req: Request, res: Response): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);
      const resultUpdateProduct = await ProductModel.deleteProduct(id);
      if (resultUpdateProduct) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "produto não encontrado" });
      }
    } catch (e) {
      console.error("Erro ao deletar produto:", e);
      res.status(500).send("Erro Interno do Servidor");
    }
  }
}

export default ProductController;
