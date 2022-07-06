import { Address } from "../../../../../domain/entity/Address";

export interface ICreateAddressRepository {
    create(address: Address): Address;
}