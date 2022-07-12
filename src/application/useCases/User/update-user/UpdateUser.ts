import { IFindAllUserRepository } from "application/ports/adapters/repository/User/IFindAllUserRepository";
import { IUpdateUserRepository } from "application/ports/adapters/repository/User/IUpdateUserRepository";
import { User } from "../../../../domain/entity/User";
import { TUser } from "../../../../domain/types/TUser";
import { IUpdateUser } from "../../../../application/ports/useCases/User/IUpdateUser";

export class UpdateUser implements IUpdateUser {

    private FindAllUsersRepo: IFindAllUserRepository
    private UpdateUserRepo: IUpdateUserRepository;

    public constructor(findAllUsersRepo: IFindAllUserRepository, updateUsersRepo: IUpdateUserRepository) {
        this.FindAllUsersRepo = findAllUsersRepo;
        this.UpdateUserRepo = updateUsersRepo;
    }

    update(id: string, fullName: string, cellPhoneDDI: string, cellPhoneDDD: string, cellPhone: string, email: string, login: string, pass: string, recoverEmail: string, addressId: string): TUser {
        try {
            const isUserDef = this.FindAllUsersRepo.findAll().find(usr => usr.getUserId() == id);
            if (isUserDef) {
                const newUser = new User(id, fullName, cellPhoneDDI, cellPhoneDDD, cellPhone, email, login, pass, recoverEmail, addressId);
                this.UpdateUserRepo.update(isUserDef, newUser);
                return newUser.toString();
            }else{
                throw new Error("No User was Found");
            }
        } catch (error) {
            throw "Action not scheduled";
        }
    }

}