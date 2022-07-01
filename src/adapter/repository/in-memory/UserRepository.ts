import { ICreateUserRepository } from "../../../application/ports/adapters/IUserRepository";
import { User } from "../../../domain/entity/User";

export class CreateUserRepository implements ICreateUserRepository {

    public users = []

    public create(user: User): User {
        this.users.push(user);
        return user;
    }

    public findAll(): User[] {
        return this.users;
    }
}