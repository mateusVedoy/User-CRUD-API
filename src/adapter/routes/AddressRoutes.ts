import { Router } from "express";
import { createAddressControl, findAllAddressesControl } from "../../main/in-memory/Address/main";

const addressRouter = Router();

addressRouter.post("/create", createAddressControl.handle);
addressRouter.get("/all", findAllAddressesControl.handle);

export { addressRouter }