import { Request, Response } from "express";
import { Router } from "express";
import { createAddressControl, findAllAddressesControl } from "../../../main/in-memory/Address/main";

const addressRouterInMemory = Router();

addressRouterInMemory.post("/create", (req: Request, res: Response) => { return createAddressControl.handle(req, res) });
addressRouterInMemory.get("/all", (req: Request, res: Response) => { return findAllAddressesControl.handle(req, res) });

export { addressRouterInMemory }