import { Address } from "../../../../domain/entity/Address";
import { IFindAllAddressesRepository } from "../../../ports/adapters/Address/IFindAllAddressesRepository";
import { IFindAllAddresses } from "../../../ports/Address/IFindAllAddress";

export class FindAllAddresses implements IFindAllAddresses {

    private FindAllAddressesRepository: IFindAllAddressesRepository;

    constructor(findAllAddressesRepo: IFindAllAddressesRepository){
        this.FindAllAddressesRepository = findAllAddressesRepo;
    }

    findAll(): Address[] {
        return this.FindAllAddressesRepository.findAll();
    }
}