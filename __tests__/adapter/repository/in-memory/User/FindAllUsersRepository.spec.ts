import { FindAllUserRepository } from "../../../../../src/adapter/repository/in-memory/User/FindAllUserRepository";
import { Users } from "../../../../../src/adapter/database/in-memory/User/Users"

describe("FindAllUserRepository", () => {

    const findAllUserRepository = new FindAllUserRepository();

    it("should return all users", () => {
        expect(findAllUserRepository.findAll()).toBe(Users);
    });
});