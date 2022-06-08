import { TAddress } from "../../application/ports/Address/TAddress";
import { Request, Response } from "express";

export interface IAddressController {
    handle(req: Request, res: Response): Response<TAddress>;
}