import { ICreateUserRepository } from "../../../../application/ports/adapters/User/ICreateUserRepository";
import { User } from "../../../../domain/entity/User";
import { Users } from "../../../../adapter/database/in-memory/User/Users";

export class CreateUserRepository implements ICreateUserRepository {

    public create(user: User): User {
        Users.push(user)
        return user;
    }
}