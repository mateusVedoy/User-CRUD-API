import { Request, Response } from "express";
import { Router } from "express";
import { 
    createUserController, 
    findAllUsersController, 
    findUserByIdController, 
    updateUserController, 
    deleteUserController } from "../../../main/in-memory/User/main";

const userRouterInMemory = Router();

userRouterInMemory.post("/create", (req: Request, res: Response) => { return createUserController.handle(req, res) });
userRouterInMemory.get("/all", (req: Request, res: Response) => { return findAllUsersController.handle(req, res) });
userRouterInMemory.get("/find", (req: Request, res: Response) => { return findUserByIdController.handle(req, res) });
userRouterInMemory.patch("/update/:id", (req: Request, res: Response) => { return updateUserController.handle(req, res) });
userRouterInMemory.delete("/delete/:id", (req: Request, res: Response) => { return deleteUserController.handle(req, res) });

export { userRouterInMemory }