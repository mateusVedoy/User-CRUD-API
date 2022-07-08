import { IFindAllUsers } from "../../../ports/useCases/User/IFindAllUsers";
import { User } from "../../../../domain/entity/User";
import { IFindAllUserRepository } from "application/ports/adapters/repository/User/IFindAllUserRepository";
import { TUser } from "../../../../domain/types/TUser";

export class FindAllUsers implements IFindAllUsers {
    private UserRepository: IFindAllUserRepository;

    public constructor(userRepo: IFindAllUserRepository) {
        this.UserRepository = userRepo;
    }

    public FindAll(): TUser[] {
        const users = this.UserRepository.findAll();
        const tUsers = [];
        users.forEach( user => {
            tUsers.push(user.toString());
        });
        return tUsers;
    }
}