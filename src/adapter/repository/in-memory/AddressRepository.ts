import { IAddressRepository } from "../../../application/ports/adapters/IAddressRepository";
import { TAddress } from "../../../application/ports/Address/TAddress";
import { Address } from "../../../domain/entity/Address";

export class CreateAddressRepository implements IAddressRepository {

    public address = []

    create(address: Address): Address {
        this.address.push(address);
        return address;
    }

    findAll(): Address[] {
        return this.address;
    }
}