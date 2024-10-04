import db from "src/config/db";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}
class UserModel implements User {
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

  static async getUsers() {
    try {
      const rows = await db.query("SELECT * FROM user");
      return rows;
    } catch (e) {
      console.error(e);
      throw new Error("Database query failed");
    }
  }
}

export default UserModel;
