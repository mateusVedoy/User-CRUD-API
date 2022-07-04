import { User } from "../../../../../src/domain/entity/User";
import { CreateUserRepository } from "../../../../../src/adapter/repository/in-memory/User/CreateUserRepository";


describe("CreateUserRepository", () => {

    const createUserRepository = new CreateUserRepository();
    const usr = new User('1', 'mateus');

    //deve crir um novo usuario
    it("should create a new user", () => {
        expect(createUserRepository.create(usr)).toBe(usr);
    });
});