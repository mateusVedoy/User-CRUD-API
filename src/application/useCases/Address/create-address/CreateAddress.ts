import { Address } from "../../../../domain/entity/Address";
import { ICreateAddress } from "../../../ports/Address/ICreateAdress";
import { IAddressRepository } from "../../../ports/adapters/IAddressRepository";

export class CreateAddress implements ICreateAddress{

    private CreateAddressRepository: IAddressRepository;

    constructor(createAddressRepository: IAddressRepository){
        this.CreateAddressRepository = createAddressRepository;
    }

    create(addressId: string, country: string, state: string, city: string, neighborhood: string, street: string, streetNumber: number): Address {
        const address = new Address(addressId, country, state, city, neighborhood, street, streetNumber);
        return this.CreateAddressRepository.create(address);
    }
}