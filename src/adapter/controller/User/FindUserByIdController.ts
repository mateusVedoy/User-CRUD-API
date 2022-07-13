import { TUser } from "../../../domain/types/TUser";
import { IFindUser } from "../../../application/ports/useCases/User/IFindUser";
import { IUserController } from "../../ports/IUserController";
import { Request, Response } from "express"

export class FindUserByIdController implements IUserController {

    private FindUserService: IFindUser;

    public constructor(findAllUsers: IFindUser) {
        this.FindUserService = findAllUsers;
    }

    public handle(req: Request, res: Response): Response<TUser> {
        try {
            const { id } = req.query;
            const user = this.FindUserService.find(id.toString());
            return res.json({ "User": user });
        } catch (error) {
            return res.json({ "Message: ": error }).status(200);
        }

    }
}