import { TAddress } from "../../../application/ports/Address/TAddress";
import { IAddressController } from "../../ports/IAddressController";
import { Request, Response } from "express";
import { ICreateAddress } from "../../../application/ports/Address/ICreateAdress";
import { IFindAllAddresses } from "../../../application/ports/Address/IFindAllAddress";

export class CreateAddressController implements IAddressController {

    static CreateAddressService: ICreateAddress;

    constructor(createAddressService: ICreateAddress){
        CreateAddressController.CreateAddressService = createAddressService;
    }

    handle(req: Request, res: Response): Response<TAddress> {
        const address = req.body;
        const createdAddress = CreateAddressController.CreateAddressService.create(address);
        return res.json({"New Address": createdAddress});
    };
}

export class FindAllAddressesController implements IAddressController {

    static FindAllAddressesService: IFindAllAddresses;

    constructor(findAllAddressesService: IFindAllAddresses){
        FindAllAddressesController.FindAllAddressesService = findAllAddressesService;
    }

    handle(_: Request, res: Response): Response<TAddress> {
        const allAddresses = FindAllAddressesController.FindAllAddressesService.findAll();
        return res.json({"Addresses: ": allAddresses});
    }
}