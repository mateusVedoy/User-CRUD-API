import { Request, Response } from "express";
import { Router } from "express";
import { createUserController, findAllUsersController } from "../../main/in-memory/User/main";

const userRouter = Router();

userRouter.post("/create", (req: Request, res: Response) => { return createUserController.handle(req, res) });
userRouter.get("/all", (req: Request, res: Response) => { return findAllUsersController.handle(req, res) });

export { userRouter }