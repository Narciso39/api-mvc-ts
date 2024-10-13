import db from "../config/db"; // const que chama o método do mysql2/promise
// import { RowDataPacket } from "mysql2";

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   sku: string;
//   stock: number;
// }

/* essa interface serve para fazer o map no select de todos os itens da tabela,
  tinha usado na model de users, porém, está retornando só as row de id, usar caso bugue,
  em ultimo caso mesmo kkkk
*/
// interface ProductRow extends RowDataPacket {
//     id: number;
//     name: string;
//     price: number;
//     sku: string;
//     stock: number;
// }

// ínicio da classe de produtos
class ProductModel {
    id: number;
    name: string;
    price: number;
    sku: string;
    stock: number;
    term: string;
  
    constructor(id: number, name: string, price: number, sku: string, stock: number, term: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.sku = sku;
      this.stock = stock;
      this.term = term;
    }
// retorna todos os produtos
  static async selectAll() {
    try {
        const [rowsOfProducts] = await db.query("SELECT  * FROM products");
        return rowsOfProducts;
    } catch (e) {
        throw new Error("Database query failed");
    }
  }

// retorna um os produto específico
  static async selectThis(id: number) {
    try {
      const [rowOfProduct] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
      return rowOfProduct;
    } catch (e) {
      throw new Error("Database query failed");
    }
  }

// retorna os produtos com o nome semelhantes a pesquisa
  static async selectLike(term: string) {
    try {
      const [rowOfThisProduct] = await db.query("SELECT * FROM products WHERE name LIKE ?", [`%${term}%`]);
      return rowOfThisProduct;
    } catch (e) {
      console.log(e);
      throw new Error("Database query failed");
    }
  }

// adiciona um novo produto
  static async insertProduct(name: string, price: number, sku: string, stock: number) {
    try {
        const [insertNewProduct] = await db.query("INSERT INTO products (name, price, sku, stock) VALUES (?, ?, ?, ?)", [name, price, sku, stock]);
        return insertNewProduct;
    } catch (e) {
        console.error("Erro ao inserir produto:", e);
        throw new Error("Database query failed");
    }
  }

// atualiza o produto
  static async updateProduct(id: number, name: string, price: number, sku: string, stock: number) {
    try {
        const [editProduct] = await db.query("UPDATE products SET name = ?, price = ?, sku = ?, stock = ? WHERE id = ?", [name, price, sku, stock, id]);
        return editProduct;
    } catch (e) {
        throw new Error("Database query failed");
    }
  }

// deleta o produto
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