import { User } from "../../../../domain/entity/User";
import { ICreateUser } from "../../../ports/User/ICreateUser";
import { ICreateUserRepository } from "../../../ports/adapters/IUserRepository";
import { TUser } from "../../../ports/User/TUser";

export class CreateUser implements ICreateUser {

    static CreateUserRepository: ICreateUserRepository;

    public constructor(createUserRepo: ICreateUserRepository) {
        CreateUser.CreateUserRepository = createUserRepo;
    }

    public create({userId, userFullName}: TUser): User {
        const user = new User(userId, userFullName);
        return CreateUser.CreateUserRepository.create(user);
    }
}