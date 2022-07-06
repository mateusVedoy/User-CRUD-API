import { Request, Response } from "express";
import { Address } from "../../domain/entity/Address";

export interface IAddressController {
    handle(req: Request, res: Response): Response<Address>;
}