import { TUser } from "../../../../domain/types/TUser";

export interface IFindAllUsers {
    FindAll(): TUser[];
}