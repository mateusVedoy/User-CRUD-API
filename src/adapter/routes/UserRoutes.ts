import { Router } from "express";
import { createUserController, findAllUsersController } from "../../main/in-memory/User/main";

const userRouter = Router();

userRouter.post("/create", createUserController.handle);
userRouter.get("/all", findAllUsersController.handle);

export { userRouter }