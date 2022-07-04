
import { IFindAllAddressesRepository } from "application/ports/adapters/Address/IFindAllAddressesrepository";
import { Address } from "../../../../domain/entity/Address";
import { Addresses } from "../../../../adapter/database/in-memory/Address/Address";

export class FindAllAddressesRepository implements IFindAllAddressesRepository {

    public findAll(): Address[] {
        return Addresses;
    }
}