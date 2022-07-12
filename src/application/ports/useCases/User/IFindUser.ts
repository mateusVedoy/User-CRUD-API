import { TUser } from "../../../../domain/types/TUser";

export interface IFindUser {
    find(prop: string): TUser;
}