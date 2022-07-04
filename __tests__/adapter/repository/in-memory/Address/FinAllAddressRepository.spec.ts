import { FindAllAddressesRepository } from "../../../../../src/adapter/repository/in-memory/Address/FindAllAddressesRepository";
import { Addresses } from "../../../../../src/adapter/database/in-memory/Address/Address";

describe("FindAllddressRepository", () => {

    const findAllAddressRepository = new FindAllAddressesRepository();

    it("should return all addresses", () => {
        expect(findAllAddressRepository.findAll()).toBe(Addresses);
    });
});