import { IUserController } from "../../ports/IUserController";
import { Request, Response } from "express";
import { ICreateUser } from "../../../application/ports/useCases/User/ICreateUser";


export class CreateUserController implements IUserController {

    private CreateUserService: ICreateUser;

    public constructor(createUserService: ICreateUser) {
        this.CreateUserService = createUserService
    }

    handle(req: Request, res: Response): Response {
        const { userFullName } = req.body;
        const createdUser = this.CreateUserService.create(userFullName);
        return res.json(createdUser);
    }
}

