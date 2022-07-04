jest.mock("../../src/application/useCases/User/create-user/CreateUser");
jest.mock("../../src/adapter/repository/in-memory/User/CreateUserRepository");
jest.mock('../../src/domain/entity/User');

import { CreateUser } from "../../src/application/useCases/User/create-user/CreateUser";
import { CreateUserRepository } from "../../src/adapter/repository/in-memory/User/CreateUserRepository";
import { User } from "../../src/domain/entity/User";

describe("CreateUser use case", () => {
    const createUserRepository = new CreateUserRepository();
    const createUser = new CreateUser(createUserRepository);
    const usr = new User('1', 'mateus');
  
    it("should call CreateUserRepository", () => {
        expect(createUserRepository).toBeCalled;
    });

    it("should return a valid User object containing the same data received and returning that new User Object", () => {
        expect(createUser.create('1', 'mateus')).toBe(usr);
    });
});