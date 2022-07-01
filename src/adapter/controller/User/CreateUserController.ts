import { IUserController } from "../../ports/IUserController";
import { Request, Response } from "express";
import { ICreateUser } from "../../../application/ports/User/ICreateUser";


export class CreateUserController implements IUserController {

    static CreateUserService: ICreateUser;

    public constructor(createUserService: ICreateUser) {
        CreateUserController.CreateUserService = createUserService
    }

    handle(req: Request, res: Response): Response {
        const {userId, userFullName} = req.body;
        const createdUser = CreateUserController.CreateUserService.create(userId, userFullName);
        return res.json(createdUser);
    }
}

