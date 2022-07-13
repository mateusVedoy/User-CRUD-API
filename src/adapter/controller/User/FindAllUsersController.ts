import { Request, Response } from "express";
import { IUserController } from "../../ports/IUserController";
import { IFindAllUsers } from "../../../application/ports/useCases/User/IFindAllUsers";
import { TUser } from "../../../domain/types/TUser";

export class FindAllUsersController implements IUserController {
    private FindAllUsersService: IFindAllUsers;

    public constructor(findAllUsers: IFindAllUsers) {
        this.FindAllUsersService = findAllUsers;
    }

    public handle(_: Request, res: Response): Response<TUser[]> {
        const allUsers = this.FindAllUsersService.FindAll();
        return res.json({"Users": allUsers});
    }
}