import { ICreateUserRepository } from "../../application/ports/adapters/IUserRepository";
import { TUser } from "../../application/ports/User/TUser";
import { User } from "../../domain/entity/User";

export class CreateUserRepository implements ICreateUserRepository {

    public users = [
        {
            "userId": "1",
            "userFullName": "Mateus"
        },
        {
            "userId": "2",
            "userFullName": "Vedoy"
        }
    ]

    public create({userId, userFullName}: TUser): User {
        const user = {
            userId: userId,
            userFullName: userFullName
        }

        this.users.push(user);
        return user;
    }

    public findAll(): User[] {
        return this.users;
    }
}