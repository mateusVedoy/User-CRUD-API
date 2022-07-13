import { Request, Response } from "express";
import { Router } from "express";
import { createAddressControl, findAllAddressesControl } from "../../../main/in-memory/Address/main";

const addressRouter = Router();

addressRouter.post("/create", (req: Request, res: Response) => { return createAddressControl.handle(req, res) });
addressRouter.get("/all", (req: Request, res: Response) => { return findAllAddressesControl.handle(req, res) });

export { addressRouter }