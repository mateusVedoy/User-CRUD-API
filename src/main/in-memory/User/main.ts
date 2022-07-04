import { CreateUserController } from "../../../adapter/controller/User/CreateUserController";
import { FindAllUsersController } from "../../../adapter/controller/User/FindAllUsersController";
import { CreateUser } from "../../../application/useCases/User/create-user/CreateUser";
import { CreateUserRepository } from "../../../adapter/repository/in-memory/User/CreateUserRepository";
import { FindAllUsers } from "../../../application/useCases/User/findAll-users/FindAllUsers";
import { FindAllUserRepository } from "../../../adapter/repository/in-memory/User/FindAllUserRepository";

const createUserRepo = new CreateUserRepository();
const findAllUserRepo = new FindAllUserRepository();
const createUser = new CreateUser(createUserRepo);
const findAllUsers = new FindAllUsers(findAllUserRepo);
const createUserController = new CreateUserController(createUser);
const findAllUsersController = new FindAllUsersController(findAllUsers);

export {
    createUserController,
    findAllUsersController
}