import db from "../config/db";
// import { RowDataPacket } from "mysql2";

export interface Product {
  id: number;
  name: string;
  price: number;
  sku: string;
  stock: number;
}

// interface ProductRow extends RowDataPacket {
//     id: number;
//     name: string;
//     price: number;
//     sku: string;
//     stock: number;
// }

class ProductModel {
    id: number;
    name: string;
    price: number;
    sku: string;
    stock: number;
  
    constructor(id: number, name: string, price: number, sku: string, stock: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.sku = sku;
      this.stock = stock;
    }
  
  static async selectAll() {
    try {
        const [rowsOfProducts] = await db.query("SELECT  * FROM products");
        return rowsOfProducts;
    } catch (e) {
        throw new Error("Database query failed");
    }
  }

  static async insertProduct(name: string, price: number, sku: string, stock: number) {
    try {
        const [insertNewProduct] = await db.query("INSERT INTO products (name, price, sku, stock) VALUES (?, ?, ?, ?)", [name, price, sku, stock]);
        return insertNewProduct;
    } catch (e) {
        console.error("Erro ao inserir produto:", e);
        throw new Error("Database query failed");
    }
  }

  static async updateProduct(id: number, name: string, price: number, sku: string, stock: number) {
    try {
        const [editProduct] = await db.query("UPDATE products SET name = ?, price = ?, sku = ?, stock = ? WHERE id = ?", [name, price, sku, stock, id]);
        return editProduct;
    } catch (e) {
        throw new Error("Database query failed");
    }
  }

  static async deleteProduct(id: number) {
    try {
        const [deleteProduct] = await db.query("DELETE FROM products WHERE id = ?", [id]);
        return deleteProduct;
    } catch (e) {
        throw new Error("Database query failed");
    }
  }
}

export default ProductModel;