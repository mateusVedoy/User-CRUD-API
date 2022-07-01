import { TAddress } from "../../../application/ports/Address/TAddress";
import { IAddressController } from "../../ports/IAddressController";
import { Request, Response } from "express";
import { ICreateAddress } from "../../../application/ports/Address/ICreateAdress";
import { IFindAllAddresses } from "../../../application/ports/Address/IFindAllAddress";

export class CreateAddressController implements IAddressController {

    private CreateAddressService: ICreateAddress;

    constructor(createAddressService: ICreateAddress) {
        this.CreateAddressService = createAddressService;
    }

    handle(req: Request, res: Response): Response<TAddress> {
        const { addressId, country, state, city, neighborhood, street, streetNumber } = req.body;
        const createdAddress = this.CreateAddressService.create(addressId, country, state, city, neighborhood, street, streetNumber);
        return res.json({ "New Address": createdAddress });
    };
}

export class FindAllAddressesController implements IAddressController {

    private FindAllAddressesService: IFindAllAddresses;

    constructor(findAllAddressesService: IFindAllAddresses) {
        this.FindAllAddressesService = findAllAddressesService;
    }

    handle(_: Request, res: Response): Response<TAddress> {
        const allAddresses = this.FindAllAddressesService.findAll();
        return res.json({ "Addresses: ": allAddresses });
    }
}