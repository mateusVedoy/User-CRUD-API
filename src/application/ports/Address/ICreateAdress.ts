import { Adress } from "../../../domain/entity/Adress";
import { TAddress } from "./TAddress";

export interface ICreateAddress {
    create({ addressId, country, state, city, neighborhood, street, streetNumber }: TAddress): Adress;
}