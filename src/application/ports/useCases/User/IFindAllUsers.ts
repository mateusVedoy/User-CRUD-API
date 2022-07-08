import { TUser } from "../../../../domain/types/TUser";
import { User } from "../../../../domain/entity/User";

export interface IFindAllUsers {
    FindAll(): TUser[];
}