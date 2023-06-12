import { criptografar } from "../../../utils/crypto";
import { Password } from "../../entities/password";
import { PasswordRepository } from "../../repositories/password-repository";
import { UserRepository } from "../../repositories/user-repository";

interface IListPasswordUseCase {
    user_id: string;
}

export class ListPassword {
    constructor(private passwordRepository: PasswordRepository) {}

    async execute({ user_id }: IListPasswordUseCase) {
        const pass = await this.passwordRepository.findByUserId(user_id);

        console.log(pass);
        return {
            pass
        }
    }   
}