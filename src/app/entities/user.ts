import { hashSync } from "bcrypt";
import { randomUUID } from "crypto";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export class User {
    id?: string;
    name: string;
    email: string;
    password_hash: string;

    constructor({ name, email, password }: ICreateUserDTO) {
        this.id = randomUUID();
        this.name = name;
        this.email = email;
        this.password_hash = password;
    }
}