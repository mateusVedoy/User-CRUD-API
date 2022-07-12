import { Request, Response } from "express";
import { Router } from "express";
import { createUserController, findAllUsersController, findUserByIdController, updateUserController } from "../../main/in-memory/User/main";

const userRouter = Router();

userRouter.post("/create", (req: Request, res: Response) => { return createUserController.handle(req, res) });
userRouter.get("/all", (req: Request, res: Response) => { return findAllUsersController.handle(req, res) });
userRouter.get("/find", (req: Request, res: Response) => { return findUserByIdController.handle(req, res) });
userRouter.patch("/update/:id", (req: Request, res: Response) => { return updateUserController.handle(req, res) });

export { userRouter }