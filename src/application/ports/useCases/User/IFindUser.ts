import { TUser } from "../../../../domain/types/TUser";

export interface IFindUser {
    findUser(prop: string): TUser;
}