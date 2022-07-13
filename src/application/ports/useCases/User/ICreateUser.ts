import { User } from "../../../../domain/entity/User";
import { TUser } from "../../../../domain/types/TUser"

export interface ICreateUser {
    create(fullName: string, cellPhoneDDI: string, cellPhoneDDD: string, cellPhone: string, email: string, login: string, pass: string, recoverEmail: string, addressId: string): TUser;
}