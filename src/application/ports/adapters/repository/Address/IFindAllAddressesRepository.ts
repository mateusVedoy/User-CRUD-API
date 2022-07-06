import { Address } from "../../../../../domain/entity/Address";

export interface IFindAllAddressesRepository {
    findAll(): Address[];
}