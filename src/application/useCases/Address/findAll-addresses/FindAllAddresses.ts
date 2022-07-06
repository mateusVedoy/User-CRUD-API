import { Address } from "../../../../domain/entity/Address";
import { IFindAllAddressesRepository } from "../../../ports/adapters/repository/Address/IFindAllAddressesRepository";
import { IFindAllAddresses } from "../../../ports/useCases/Address/IFindAllAddress";

export class FindAllAddresses implements IFindAllAddresses {

    private FindAllAddressesRepository: IFindAllAddressesRepository;

    constructor(findAllAddressesRepo: IFindAllAddressesRepository){
        this.FindAllAddressesRepository = findAllAddressesRepo;
    }

    findAll(): Address[] {
        return this.FindAllAddressesRepository.findAll();
    }
}