import { ICreateUserRepository } from "../../../../application/ports/adapters/User/ICreateUserRepository";
import { User } from "../../../../domain/entity/User";
import { UserRepository } from "./UserRepository";

export class CreateUserRepository extends UserRepository implements ICreateUserRepository {

    public create(user: User): User {
        super.setUser(user);
        return user;
    }
}