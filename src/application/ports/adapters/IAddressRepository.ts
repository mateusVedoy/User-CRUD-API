import { Address } from "../../../domain/entity/Address";

export interface IAddressRepository {
    create(address: Address): Address;
    findAll(): Address[];
}