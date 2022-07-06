import { Address } from "../../../../domain/entity/Address";

export interface ICreateAddress {
    create(country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number, zipCode: string): Address;
}