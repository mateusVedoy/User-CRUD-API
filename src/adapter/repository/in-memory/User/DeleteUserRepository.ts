import { User } from "../../../../domain/entity/User";
import { Users } from "../../../../adapter/database/in-memory/User/Users";
import { IDeleteUserRepository } from "../../../../application/ports/adapters/repository/User/IDeleteUserRepository";

export class DeleteUserRepository implements IDeleteUserRepository {
    delete(user: User): void {
        const usrIndex = Users.indexOf(user);
        if(usrIndex > -1){
            Users.splice(usrIndex, 1);
        }
    }
}