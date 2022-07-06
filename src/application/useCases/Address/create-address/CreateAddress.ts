import { Address } from "../../../../domain/entity/Address";
import { ICreateAddress } from "../../../ports/useCases/Address/ICreateAdress";
import { ICreateAddressRepository } from "../../../ports/adapters/repository/Address/ICreateAddressRepository";
import { IIdGenerator } from "application/ports/adapters/helper/IIdGenerator";

export class CreateAddress implements ICreateAddress{

    private CreateAddressRepository: ICreateAddressRepository;
    private IdGen: IIdGenerator;

    constructor(createAddressRepository: ICreateAddressRepository, idGen: IIdGenerator){
        this.CreateAddressRepository = createAddressRepository;
        this.IdGen = idGen;
    }

    create(country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number, zipCode: string): Address {
        const addressId: string = this.IdGen.idGen();
        const address = new Address(addressId, country, state, city, neighborhood, street, streetNumber, zipCode);
        return this.CreateAddressRepository.create(address);
    }
}