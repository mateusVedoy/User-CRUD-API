import { Router } from "express";

import { addressRouter } from "./AddressRoutes";
import { userRouter } from "./UserRoutes";

const router = Router();

router.use("/user", userRouter);
router.use("/address", addressRouter);

export { router }