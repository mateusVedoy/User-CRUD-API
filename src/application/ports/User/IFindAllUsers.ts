import { User } from "../../../domain/entity/User";

export interface IFindAllUsers {
    FindAll(): User[];
}