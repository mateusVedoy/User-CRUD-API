import { Adress } from "../../../domain/entity/Adress";
import { TAddress } from "../Address/TAddress";

export interface IAddressRepository {
    create({addressId, country, state, city, neighborhood, street, streetNumber}: TAddress): Adress;
    findAll(): Adress[];
}