jest.mock("../../../src/adapter/repository/in-memory/User/CreateUserRepository");
jest.mock("../../../src/adapter/repository/in-memory/User/CreateUserRepository");
jest.mock("../../../src/domain/entity/User");

import { CreateUser } from "../../../src/application/useCases/User/create-user/CreateUser";
import { CreateUserRepository } from "../../../src/adapter/repository/in-memory/User/CreateUserRepository";
import { User } from "../../../src/domain/entity/User";

const createUserRepositoryMock = CreateUserRepository as jest.Mock<CreateUserRepository>;
const createUserMock = CreateUser as jest.Mock<CreateUser>;
const userMock = User as jest.Mock<User>;

const createUserRepository = new createUserRepositoryMock() as jest.Mocked<CreateUserRepository>;
const createUser = new createUserMock(createUserRepository) as jest.Mocked<CreateUser>;
const userMocked = new userMock('1', 'mateus') as jest.Mocked<User>;

describe("CreateUser", () => {

    it("should call CreateUserRepository", () => {
        expect(createUserRepository).toBeCalled;
    });

    it("should create a new user object with the same data that was passed", () => {
        expect(createUser.create('1', 'mateus')).toBe(userMocked);
    });
});