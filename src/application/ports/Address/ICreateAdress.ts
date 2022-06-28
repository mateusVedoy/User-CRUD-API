import { Address } from "../../../domain/entity/Address";
import { TAddress } from "./TAddress";

export interface ICreateAddress {
    create({ addressId, country, state, city, neighborhood, street, streetNumber }: TAddress): Address;
}