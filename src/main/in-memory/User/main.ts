import { CreateUserController } from "../../../adapter/controller/User/CreateUserController";
import { FindAllUsersController } from "../../../adapter/controller/User/FindAllUsersController";
import { CreateUser } from "../../../application/useCases/User/create-user/CreateUser";
import { CreateUserRepository } from "../../../adapter/repository/in-memory/User/CreateUserRepository";
import { FindAllUsers } from "../../../application/useCases/User/findAll-users/FindAllUsers";
import { FindAllUserRepository } from "../../../adapter/repository/in-memory/User/FindAllUserRepository";
import { IdGeneratorUUID } from "../../../adapter/helper/IdGenerator/IdGeneratorUUID";
import { FindUserByIdController } from "../../../adapter/controller/User/FindUserByIdController";
import { FindUserById } from "../../../application/useCases/User/find-user/FindUserById";
import { DeleteUserRepository } from "../../../adapter/repository/in-memory/User/DeleteUserRepository";
import { UpdateUserRepository } from "../../../adapter/repository/in-memory/User/UpdateUserRepository";
import { UpdateUser } from "../../../application/useCases/User/update-user/UpdateUser";
import { UpdateUserController } from "../../../adapter/controller/User/UpdateUserController";

//repos
const createUserRepo = new CreateUserRepository();
const findAllUserRepo = new FindAllUserRepository();
const deleteUserRepo = new DeleteUserRepository();
const updateUserRepo = new UpdateUserRepository(deleteUserRepo, createUserRepo);

//utils
const idGenerator = new IdGeneratorUUID();

//use cases
const findUserById = new FindUserById(findAllUserRepo)
const createUser = new CreateUser(createUserRepo, idGenerator);
const findAllUsers = new FindAllUsers(findAllUserRepo);
const updateUser = new UpdateUser(findAllUserRepo, updateUserRepo);

//control
const findUserByIdController = new FindUserByIdController(findUserById);
const createUserController = new CreateUserController(createUser);
const findAllUsersController = new FindAllUsersController(findAllUsers);
const updateUserController = new UpdateUserController(updateUser);

export {
    createUserController,
    findAllUsersController,
    findUserByIdController,
    updateUserController
}