import { User } from "../../../../../domain/entity/User";
import { TUser } from "../../../../../domain/types/TUser";

export interface ICreateUserRepository {
    create(user: User): User;
}