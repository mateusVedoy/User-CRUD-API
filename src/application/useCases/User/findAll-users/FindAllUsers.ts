import { IFindAllUsers } from "../../../ports/useCases/User/IFindAllUsers";
import { ICreateUserRepository } from "../../../ports/adapters/repository/User/ICreateUserRepository";
import { User } from "../../../../domain/entity/User";
import { IFindAllUserRepository } from "application/ports/adapters/repository/User/IFindAllUserRepository";

export class FindAllUsers implements IFindAllUsers {
    private UserRepository: IFindAllUserRepository;

    public constructor(userRepo: IFindAllUserRepository) {
        this.UserRepository = userRepo;
    }

    public FindAll(): User[] {
        return this.UserRepository.findAll();
    }
}