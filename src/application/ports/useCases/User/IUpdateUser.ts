import { TUser } from "domain/types/TUser";

export interface IUpdateUser {
    update(id: string, fullName: string, cellPhoneDDI: string, cellPhoneDDD: string, cellPhone: string, email: string, login: string, pass: string, recoverEmail: string, addressId: string): TUser;
}