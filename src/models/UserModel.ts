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

  
}

export default UserModel;
