import { User } from "../../../../../domain/entity/User";

export interface IUpdateUserRepository {
    update(user: User, newUser: User): User;
}