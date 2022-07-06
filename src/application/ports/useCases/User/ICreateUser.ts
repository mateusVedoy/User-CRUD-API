import { User } from "../../../../domain/entity/User";

export interface ICreateUser {
    create(userFullName: string): User;
}