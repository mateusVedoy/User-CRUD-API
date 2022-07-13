import { IFindAllUserRepository } from "application/ports/adapters/repository/User/IFindAllUserRepository";
import { IFindUser } from "application/ports/useCases/User/IFindUser";
import { TUser } from "../../../../domain/types/TUser";

export class FindUserById implements IFindUser {

    private FindAllUsersRepository: IFindAllUserRepository;

    public constructor(findaALlUsersRepo: IFindAllUserRepository) {
        this.FindAllUsersRepository = findaALlUsersRepo;
    }

    find(id: string): TUser {

        try {
            const users = this.FindAllUsersRepository.findAll();
            const user = users.find(usr => usr.getUserId() == id);
            return user.toString();
        } catch (error) {
            throw "No return matches";
        }
    }
}