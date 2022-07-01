import { User } from "../../../domain/entity/User";

export interface ICreateUser {
    create(userId: string, userFullName: string): User;
}