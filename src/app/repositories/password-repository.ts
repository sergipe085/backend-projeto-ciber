import { Password } from "../entities/password";

export abstract class PasswordRepository {
    abstract save(password: Password): Promise<Password>;
    abstract findByUserId(user_id: string): Promise<Password[] | null>;
    abstract update(password: Password): Promise<Password | null>;
}