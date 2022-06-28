import { Address } from "../../../../domain/entity/Address";
import { IAddressRepository } from "../../../ports/adapters/IAddressRepository";
import { IFindAllAddresses } from "../../../ports/Address/IFindAllAddress";

export class FindaAllAddresses implements IFindAllAddresses {

    private FindAllAddressesRepository: IAddressRepository;

    constructor(findAllAddressesRepo: IAddressRepository){
        this.FindAllAddressesRepository = findAllAddressesRepo;
    }

    findAll(): Address[] {
        return this.FindAllAddressesRepository.findAll();
    }
}