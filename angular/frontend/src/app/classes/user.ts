export class User {

    id: number;
     username: string;
      email: string;
     gender: string;
    password: string;

    constructor(
        id: number,
        username: string,
        email: string,
        gender: string,
        password: string){
            this.id = id;
            this.username = username;
            this.email = email;
            this.gender = gender;
            this.password = password;
        }

}