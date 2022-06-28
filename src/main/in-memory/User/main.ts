import { CreateUserController, FindAllUsersController } from "../../../adapter/controller/UserController";
import { CreateUser } from "../../../application/useCases/User/create-user/CreateUser";
import { CreateUserRepository } from "../../../adapter/repository/in-memory/UserRepository";
import { FindAllUsers } from "../../../application/useCases/User/findAll-users/FindAllUsers";

const createUserRepo = new CreateUserRepository();
const createUser = new CreateUser(createUserRepo);
const findAllUsers = new FindAllUsers(createUserRepo);
const createUserController = new CreateUserController(createUser);
const findAllUsersController = new FindAllUsersController(findAllUsers);

export {
    createUserController,
    findAllUsersController
}