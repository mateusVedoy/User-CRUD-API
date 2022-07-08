import { IFindAllUserRepository } from "application/ports/adapters/repository/User/IFindAllUserRepository";
import { User } from "domain/entity/User";
import { TUser } from "../../../../domain/types/TUser";
import { Users } from "../../../../adapter/database/in-memory/User/Users";

export class FindAllUserRepository implements IFindAllUserRepository {
    public findAll(): User[] {
        return Users;
    }
}