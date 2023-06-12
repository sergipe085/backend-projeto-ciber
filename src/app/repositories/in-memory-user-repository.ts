import { User } from "../entities/user";
import { UserRepository } from "./user-repository";

export class InMemoryUserRepository extends UserRepository {
    private repository: User[] = [];

    async findByNickname(name: string): Promise<User | null> {
        const user = this.repository.find(u => u.name == name);

        if (!user) {
            return null;
        }

        return user;
    }
    async findByEmail(email: string): Promise<User | null> {
        const user = this.repository.find(u => u.email == email);

        if (!user) {
            return null;
        }

        return user;
    }

    async findById(id: string): Promise<User | null> {
        const user = this.repository.find(u => u.id == id);

        if (!user) {
            return null;
        }

        return user;
    }
    async save(user: User): Promise<User> {
        this.repository.push(user);
        console.log(this.repository)
        return user
    }

    async update(user: User): Promise<User> {
        const user_index_to_update = this.repository.findIndex((u) => u.id == user.id);

        if (user_index_to_update >= 0) {
            this.repository[user_index_to_update] = user;
        }
        return user;
    }

    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}