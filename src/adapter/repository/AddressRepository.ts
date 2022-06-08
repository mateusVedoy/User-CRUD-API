import { IAddressRepository } from "../../application/ports/adapters/IAddressRepository";
import { TAddress } from "../../application/ports/Address/TAddress";
import { Adress } from "../../domain/entity/Adress";

export class CreateAddressRepository implements IAddressRepository {

    public address = [
        {
            "addressId": "1",
            "country": "Brasil",
            "state": "RS",
            "city": "Porto Alegre",
            "neighborhood": "Centro Histórico",
            "street": "Rua Cel. Fernando Machado",
            "streetNumber": 613
        }
    ]

    create({ addressId, country, state, city, neighborhood, street, streetNumber }: TAddress): Adress {
        const address = {
            addressId: addressId,
            country: country,
            state: state,
            city: city,
            neighborhood: neighborhood,
            street: street,
            streetNumber: streetNumber
        }
        this.address.push(address);

        return address;
    }

    findAll(): Adress[] {
        return this.address;
    }
}