import { Post } from "./post";

export class User {

    id!: number;
     username!: string;
      email!: string;
     gender!: string;
    password!: string;
    posts!: Post[];
    comments!: Comment[];
    /*
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
        */

}