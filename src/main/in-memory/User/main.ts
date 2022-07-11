import { CreateUserController } from "../../../adapter/controller/User/CreateUserController";
import { FindAllUsersController } from "../../../adapter/controller/User/FindAllUsersController";
import { CreateUser } from "../../../application/useCases/User/create-user/CreateUser";
import { CreateUserRepository } from "../../../adapter/repository/in-memory/User/CreateUserRepository";
import { FindAllUsers } from "../../../application/useCases/User/findAll-users/FindAllUsers";
import { FindAllUserRepository } from "../../../adapter/repository/in-memory/User/FindAllUserRepository";
import { IdGeneratorUUID } from "../../../adapter/helper/IdGenerator/IdGeneratorUUID";
import { FindUserByIdController } from "../../../adapter/controller/User/FindUserByIdController";
import { FindUserById } from "../../../application/useCases/User/find-user/FindUserById";

const createUserRepo = new CreateUserRepository();
const findAllUserRepo = new FindAllUserRepository();
const idGenerator = new IdGeneratorUUID();
const findUserById = new FindUserById(findAllUserRepo)
const createUser = new CreateUser(createUserRepo, idGenerator);
const findAllUsers = new FindAllUsers(findAllUserRepo);
const findUserByIdController = new FindUserByIdController(findUserById);
const createUserController = new CreateUserController(createUser);
const findAllUsersController = new FindAllUsersController(findAllUsers);

export {
    createUserController,
    findAllUsersController,
    findUserByIdController
}