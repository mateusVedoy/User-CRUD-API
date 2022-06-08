import { IUserController } from "../ports/IUserController";
import { Request, Response } from "express";
import { ICreateUser } from "../../application/ports/User/ICreateUser";
import { IFindAllUsers } from "../../application/ports/User/IFindAllUsers";
import { User } from "../../domain/entity/User";

export class CreateUserController implements IUserController {

    static CreateUserService: ICreateUser;

    public constructor(createUserService: ICreateUser) {
        CreateUserController.CreateUserService = createUserService
    }

    handle(req: Request, res: Response): Response {
        const user = req.body;
        const createdUser = CreateUserController.CreateUserService.create(user);
        return res.json(createdUser);
    }
}

export class FindAllUsersController implements IUserController {
    static FindAllUsersService: IFindAllUsers;

    public constructor(findAllUsers: IFindAllUsers) {
        FindAllUsersController.FindAllUsersService = findAllUsers;
    }

    handle( _: Request, res: Response): Response<User[]> {
        const allUsers = FindAllUsersController.FindAllUsersService.FindAll();
        return res.json(allUsers);
    }
}