import { Request, Response, NextFunction } from "express";
import ProductModel from "../models/ProductController";

class ProductController {
    static async getAllProduct(req: Request, res: Response): Promise<void> {
        try {
            const resultGetProducts = await ProductModel.getAll();
            res.json(resultGetProducts);
        } catch (e) {
            res.status(500).send("Erro Interno do Servidor");
        }
    }

    static async addNewProduct(req: Request, res: Response): Promise<void> {
        try {
            const {name, price, sku, stock} = req.body;
            if (!name || !price || !sku || !stock) {
                res
                 .status(400)
                 .send("Bad Request: Campos obrigatórios ausentes");
                 return;
             }
             const resultPostNewProduct = await ProductModel.addProduct(name, price, sku, stock);
             res.status(201).json({
                message: "produto criado com sucesso",
                resultPostNewProduct,
             })
        } catch (e) {
            console.error("Erro ao criar usuário:", e);
            res.status(500).send("Erro Interno do Servidor");
        }
    }
}

export default ProductController;