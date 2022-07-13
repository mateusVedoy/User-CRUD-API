import { IDeleteUser } from "application/ports/useCases/User/IDeleteUser";
import { Request, Response } from "express";
import { IUserController } from "../../../adapter/ports/IUserController";

export class DeleteUserController implements IUserController {

    private DeleteUser: IDeleteUser;

    public constructor(deleteUser: IDeleteUser) {
        this.DeleteUser = deleteUser;
    }

    handle(req: Request, res: Response): Response {

        const { id } = req.params;

        try {
            this.DeleteUser.delete(id.toString());
            return res.json({ "Message:": "User Deleted" }).status(200);
        } catch (error) {
            res.json({ "Message: ": error }).status(400);
        }
    }

}