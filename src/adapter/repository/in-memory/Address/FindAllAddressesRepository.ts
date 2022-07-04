
import { IFindAllAddressesRepository } from "application/ports/adapters/Address/IFindAllAddressesrepository";
import { Address } from "../../../../domain/entity/Address";
import { AddressRepository } from "./AddressRepository";

export class FindAllAddressesRepository extends AddressRepository implements IFindAllAddressesRepository {

    public findAll(): Address[] {
        return super.getAddresses();
    }
}