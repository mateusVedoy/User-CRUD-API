import { IDeleteUserRepository } from "application/ports/adapters/repository/User/IDeleteUserRepository";
import { IFindAllUserRepository } from "../../../../application/ports/adapters/repository/User/IFindAllUserRepository";
import { IDeleteUser } from "../../../../application/ports/useCases/User/IDeleteUser";
import { User } from "../../../../domain/entity/User";

export class DeleteUser implements IDeleteUser {

    private FindAllUsersRepo: IFindAllUserRepository;
    private DeleteUserRepo: IDeleteUserRepository;

    public constructor(findAllUsersRepo: IFindAllUserRepository, deleteUserRepo: IDeleteUserRepository){
        this.FindAllUsersRepo = findAllUsersRepo;
        this.DeleteUserRepo = deleteUserRepo;
    }

    delete(id: string): void {
        const usr = this.FindAllUsersRepo.findAll().find(usu => usu.getUserId() == id);
        if(usr){
            this.DeleteUserRepo.delete(usr);
        }else{
            throw "User not found to be deleted";
        }
    }

}