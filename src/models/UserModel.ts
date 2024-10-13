import db from "../config/db"; // const que chama o método do mysql2/promise
// import { RowDataPacket } from "mysql2";

// auxilia a userRow 
// export interface User {
//   id: number;
//   email: string;
//   name: string;
// }

/* essa interface serve para fazer o map no select de todos os itens da tabela,
  tinha usado na model de users, porém, está retornando só as row de id, usar caso bugue,
  em ultimo caso mesmo kkkk
*/
// interface UserRow extends RowDataPacket {
//   id: number;
//   email: string;
//   password: string;
//   name: string;
// }
// inicio da model de usuários
class UserModel {
  id: number;
  email: string;
  password: string;
  name: string;

  constructor(id: number, email: string, password: string, name: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
  }

// retorna todos os usuários
  static async getUsers() {
    try {
      const [rows] = await db.query(
        "SELECT * FROM user"
      );
      return rows;
    } catch (e) {
      console.error("Error fetching users:", e);
      throw new Error("Database query failed");
    }
  }
// adiciona um novo usuário
  static async addNewUser(email: string, password: string, name: string) {
    try {
      const [insertNewUser] = await db.query(
        "INSERT INTO user (email, password, name) VALUES (?, ?, ?)",
        [email, password, name]
      );
      return insertNewUser;
    } catch (e) {
      throw new Error("Data base query failed");
    }
  }

// edita o usuário
  static async edit(id: number, email: string, password: string, name: string) {
    try {
      const [editUser] = await db.query(
        "UPDATE user SET email = ?, password = ?, name = ? WHERE id = ?",
        [email, password, name, id]
      );
      return editUser;
    } catch (e) {
      throw new Error("Data base query failed");
    }
  }

// deleta o usuário
  static async delete(id: number) {
    try {
      const [deleteUser] = await db.query("DELETE FROM user WHERE id = ?", [id]);
      return deleteUser;
    } catch (e) {
      throw new Error("Data base query failed");
    }
  }
}

export default UserModel;
