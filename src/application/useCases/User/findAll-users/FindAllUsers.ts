import { IFindAllUsers } from "../../../ports/User/IFindAllUsers";
import { ICreateUserRepository } from "../../../ports/adapters/IUserRepository";
import { User } from "../../../../domain/entity/User";

export class FindAllUsers implements IFindAllUsers {
    private UserRepository: ICreateUserRepository;

    public constructor(userRepo: ICreateUserRepository) {
        this.UserRepository = userRepo;
    }

    public FindAll(): User[] {
        return this.UserRepository.findAll();
    }
}