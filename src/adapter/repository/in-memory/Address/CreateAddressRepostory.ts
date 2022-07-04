import { ICreateAddressRepository } from "../../../../application/ports/adapters/Address/ICreateAddressRepository";
import { Address } from "../../../../domain/entity/Address";
import { AddressRepository } from "./AddressRepository";

export class CreateAddressRepository extends AddressRepository implements ICreateAddressRepository {

    create(address: Address): Address {
        super.setAddress(address);
        return address;
    }
}