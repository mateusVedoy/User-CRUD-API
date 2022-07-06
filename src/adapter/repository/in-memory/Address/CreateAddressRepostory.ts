import { ICreateAddressRepository } from "../../../../application/ports/adapters/repository/Address/ICreateAddressRepository";
import { Address } from "../../../../domain/entity/Address";
import { Addresses } from "../../../../adapter/database/in-memory/Address/Address";

export class CreateAddressRepository implements ICreateAddressRepository {

    create(address: Address): Address {
        Addresses.push(address);
        return address;
    }
}