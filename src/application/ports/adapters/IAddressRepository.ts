import { Address } from "../../../domain/entity/Address";
import { TAddress } from "../Address/TAddress";

export interface IAddressRepository {
    create({addressId, country, state, city, neighborhood, street, streetNumber}: TAddress): Address;
    findAll(): Address[];
}