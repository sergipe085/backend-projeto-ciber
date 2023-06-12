import { Password } from "../entities/password";
import { PasswordRepository } from "./password-repository";

export class InMemoryPasswordRepository extends PasswordRepository {
    private repository: Password[] = [];

    async save(password: Password): Promise<Password> {
        this.repository.push(password);
        return password
    }

    async update(password: Password): Promise<Password> {
        const password_index_to_update = this.repository.findIndex((p) => p.id == password.id);

        if (password_index_to_update >= 0) {
            this.repository[password_index_to_update] = password;
        }
        return password;
    }

    async findByUserId(user_id: string): Promise<Password[] | null> {
        const password = this.repository.filter(p => p.user_id == user_id);
        return password;
    }
}