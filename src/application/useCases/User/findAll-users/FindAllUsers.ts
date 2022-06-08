import { User } from "../../../../domain/entity/User";
import { IFindAllUsers } from "../../../ports/User/IFindAllUsers";
import { ICreateUserRepository } from "../../../ports/adapters/IUserRepository";

export class FindAllUsers implements IFindAllUsers {
    static UserRepository: ICreateUserRepository;

    public constructor(userRepo: ICreateUserRepository) {
        FindAllUsers.UserRepository = userRepo;
    }

    public FindAll(): User[] {
        return FindAllUsers.UserRepository.findAll();
    }
}