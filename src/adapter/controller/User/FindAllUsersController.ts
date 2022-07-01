import { Request, Response } from "express";
import { IUserController } from "../../ports/IUserController";
import { IFindAllUsers } from "../../../application/ports/User/IFindAllUsers";
import { User } from "../../../domain/entity/User";

export class FindAllUsersController implements IUserController {
    static FindAllUsersService: IFindAllUsers;

    public constructor(findAllUsers: IFindAllUsers) {
        FindAllUsersController.FindAllUsersService = findAllUsers;
    }

    public handle(_: Request, res: Response): Response<User[]> {
        console.log(this)
        const allUsers = FindAllUsersController.FindAllUsersService.FindAll();
        return res.json(allUsers);
    }
}