import { Address } from "../../../../domain/entity/Address";
import { ICreateAddress } from "../../../ports/Address/ICreateAdress";
import { IAddressRepository } from "../../../ports/adapters/IAddressRepository";
import { TAddress } from "../../../ports/Address/TAddress";

export class CreateAddress implements ICreateAddress{

    private CreateAddressRepository: IAddressRepository;

    constructor(createAddressRepository: IAddressRepository){
        this.CreateAddressRepository = createAddressRepository;
    }

    create({addressId, country, state, city, neighborhood, street, streetNumber}: TAddress): Address {
        const address = new Address(addressId, country, state, city, neighborhood, street, streetNumber);
        return this.CreateAddressRepository.create(address);
    }
}