import { User } from "../../../domain/entity/User";
import { TUser } from "./TUser";

export interface ICreateUser {
    create({ userId, userFullName }: TUser): User;
}