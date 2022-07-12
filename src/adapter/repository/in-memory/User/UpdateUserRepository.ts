import { ICreateUserRepository } from "application/ports/adapters/repository/User/ICreateUserRepository";
import { IDeleteUserRepository } from "application/ports/adapters/repository/User/IDeleteUserRepository";
import { IUpdateUserRepository } from "../../../../application/ports/adapters/repository/User/IUpdateUserRepository";
import { User } from "../../../../domain/entity/User";

export class UpdateUserRepository implements IUpdateUserRepository {

    private DeleteUserRepo: IDeleteUserRepository;
    private CreateUserRepo: ICreateUserRepository;

    public constructor(deleteUseRepo: IDeleteUserRepository, createUserRepo: ICreateUserRepository){
        this.DeleteUserRepo = deleteUseRepo;
        this.CreateUserRepo = createUserRepo;
    }

    update(user: User, newUser: User): User {
       this.DeleteUserRepo.delete(user);
       return this.CreateUserRepo.create(newUser);
    }

}