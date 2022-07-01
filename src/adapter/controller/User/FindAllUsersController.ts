import { Request, Response } from "express";
import { IUserController } from "../../ports/IUserController";
import { IFindAllUsers } from "../../../application/ports/User/IFindAllUsers";
import { User } from "../../../domain/entity/User";

export class FindAllUsersController implements IUserController {
    private FindAllUsersService: IFindAllUsers;

    public constructor(findAllUsers: IFindAllUsers) {
        this.FindAllUsersService = findAllUsers;
    }

    public handle(_: Request, res: Response): Response<User[]> {
        const allUsers = this.FindAllUsersService.FindAll();
        return res.json(allUsers);
    }
}