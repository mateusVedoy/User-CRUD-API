import { IFindAllUsers } from "../../../ports/User/IFindAllUsers";
import { ICreateUserRepository } from "../../../ports/adapters/User/ICreateUserRepository";
import { User } from "../../../../domain/entity/User";
import { IFindAllUserRepository } from "application/ports/adapters/User/IFindAllUserRepository";

export class FindAllUsers implements IFindAllUsers {
    private UserRepository: IFindAllUserRepository;

    public constructor(userRepo: IFindAllUserRepository) {
        this.UserRepository = userRepo;
    }

    public FindAll(): User[] {
        return this.UserRepository.findAll();
    }
}