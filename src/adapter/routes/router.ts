import { Router } from "express";

import { addressRouter } from "./in-memory/AddressRoutes";
import { userRouterInMemory } from "./in-memory/UserRoutesInMemory";

const router = Router();

router.use("/user/in-memory", userRouterInMemory);
router.use("/address", addressRouter);

export { router }