import { Router } from "express";

import { addressRouterInMemory } from "./in-memory/AddressRoutes";
import { userRouterInMemory } from "./in-memory/UserRoutesInMemory";

const router = Router();

router.use("/user/in-memory", userRouterInMemory);
router.use("/address/in-memory", addressRouterInMemory);

export { router }