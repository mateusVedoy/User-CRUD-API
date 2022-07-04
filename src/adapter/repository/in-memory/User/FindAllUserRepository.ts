import { IFindAllUserRepository } from "application/ports/adapters/User/IFindAllUserRepository";
import { User } from "domain/entity/User";
import { UserRepository } from "./UserRepository";

export class FindAllUserRepository extends UserRepository implements IFindAllUserRepository {
    public findAll(): User[] {
        return super.getUsers();
    }
}