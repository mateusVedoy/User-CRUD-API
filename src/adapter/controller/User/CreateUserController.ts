import { IUserController } from "../../ports/IUserController";
import { Request, Response } from "express";
import { ICreateUser } from "../../../application/ports/useCases/User/ICreateUser";
import { TUser } from "domain/types/TUser";


export class CreateUserController implements IUserController {

    private CreateUserService: ICreateUser;

    public constructor(createUserService: ICreateUser) {
        this.CreateUserService = createUserService
    }

    handle(req: Request, res: Response): Response<TUser> {
        const { fullName, email, cellPhone, userAuth, addressId} = req.body;
        const { ddi, ddd, number } = cellPhone;
        const { login, pass, recoverEmail } = userAuth;
        const createdUser = this.CreateUserService.create(fullName, ddi, ddd, number, email, login, pass, recoverEmail, addressId);
        return res.json(createdUser);
    }
}

