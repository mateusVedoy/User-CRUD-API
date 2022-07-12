import { IUserController } from "../../../adapter/ports/IUserController";
import { Request, Response } from "express";
import { IUpdateUser } from "application/ports/useCases/User/IUpdateUser";
import { TUser } from "domain/types/TUser";

export class UpdateUserController implements IUserController {

    private UpdateUser: IUpdateUser;

    public constructor(updateUser: IUpdateUser) {
        this.UpdateUser = updateUser;
    }

    handle(req: Request, res: Response): Response<TUser> {
        try {
            const { id } = req.params;
            const { fullName, email, cellPhone, userAuth, addressId } = req.body;
            const { ddi, ddd, number } = cellPhone;
            const { login, pass, recoverEmail } = userAuth;
            const usr = this.UpdateUser.update(id, fullName, ddi, ddd, number, email, login, pass, recoverEmail, addressId);
            return res.json({ "Updated user:": usr });
        } catch (error) {
            return res.status(400).json({ "Message: ": error });
        }
    }
}