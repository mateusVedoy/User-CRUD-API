import { Address } from "../../../../domain/entity/Address";

export abstract class AddressRepository {

    static address = []

    public getAddresses(): Address[]{
        return AddressRepository.address;
    }

    public setAddress(address: Address): Address{
        AddressRepository.address.push(address);
        return address;
    }
}