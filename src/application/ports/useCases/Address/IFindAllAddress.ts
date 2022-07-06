import { Address } from "../../../../domain/entity/Address";

export interface IFindAllAddresses {
    findAll(): Address[];
}