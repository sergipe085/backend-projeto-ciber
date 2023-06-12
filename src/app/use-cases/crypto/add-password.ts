import { criptografar } from "../../../utils/crypto";
import { Password } from "../../entities/password";
import { PasswordRepository } from "../../repositories/password-repository";
import { UserRepository } from "../../repositories/user-repository";

interface IAddPasswordUseCase {
    user_id: string;
    service_name: string;
    password: string;
    key: string;
}

export class AddPassword {
    constructor(private passwordRepository: PasswordRepository) {}

    async execute({ user_id, service_name, password, key }: IAddPasswordUseCase) {
        const password_hash = criptografar(password, key)

        var pass = new Password({
            user_id, service_name, password_hash
        });

        pass = await this.passwordRepository.save(pass);

        console.log(pass);
        return {
            pass
        }
    }   
}