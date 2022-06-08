import { User } from "../../../domain/entity/User";
import { TUser } from "../User/TUser";

export interface ICreateUserRepository {
    create({ userId, userFullName }: TUser): User;
    findAll(): User[];
}