import { Adress } from "../../../domain/entity/Adress";

export interface IFindAllAddresses {
    findAll(): Adress[];
}