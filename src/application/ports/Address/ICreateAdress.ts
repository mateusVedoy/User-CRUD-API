import { Address } from "../../../domain/entity/Address";

export interface ICreateAddress {
    create(addressId: string, country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number): Address;
}