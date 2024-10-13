import db from "../config/db";
// import { RowDataPacket } from "mysql2";

export interface User {
  id: number;
  email: string;
  name: string;
}

// interface UserRow extends RowDataPacket {
//   id: number;
//   email: string;
//   password: string;
//   name: string;
// }

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
