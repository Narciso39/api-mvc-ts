import db from "../config/db";
import { RowDataPacket } from "mysql2";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface UserRow extends RowDataPacket {
  id: number;
  firstname: string;
  lastname: string;
  years: number;
}

class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static async getUsers(): Promise<User[]> {
    try {
      const [rows]: [UserRow[], any] = await db.query<UserRow[]>("SELECT * FROM user");
      return rows.map((row) => ({
        id: row.id,
        firstName: row.firstname,
        lastName: row.lastname,
        age: row.years,
      }));
    } catch (e) {
      console.error("Error fetching users:", e);
      throw new Error("Database query failed");
    }
  }
}

export default UserModel;
