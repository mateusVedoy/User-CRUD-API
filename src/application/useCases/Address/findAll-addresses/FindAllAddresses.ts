import { Adress } from "../../../../domain/entity/Adress";
import { IAddressRepository } from "../../../ports/adapters/IAddressRepository";
import { IFindAllAddresses } from "../../../ports/Address/IFindAllAddress";

export class FindaAllAddresses implements IFindAllAddresses {

    private FindAllAddressesRepository: IAddressRepository;

    constructor(findAllAddressesRepo: IAddressRepository){
        this.FindAllAddressesRepository = findAllAddressesRepo;
    }

    findAll(): Adress[] {
        return this.FindAllAddressesRepository.findAll();
    }
}