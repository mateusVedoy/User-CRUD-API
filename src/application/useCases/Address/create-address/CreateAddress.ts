import { Address } from "../../../../domain/entity/Address";
import { ICreateAddress } from "../../../ports/Address/ICreateAdress";
import { ICreateAddressRepository } from "../../../ports/adapters/Address/ICreateAddressRepository";

export class CreateAddress implements ICreateAddress{

    private CreateAddressRepository: ICreateAddressRepository;

    constructor(createAddressRepository: ICreateAddressRepository){
        this.CreateAddressRepository = createAddressRepository;
    }

    create(addressId: string, country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number, zipCode: string): Address {
        const address = new Address(addressId, country, state, city, neighborhood, street, streetNumber, zipCode);
        return this.CreateAddressRepository.create(address);
    }
}