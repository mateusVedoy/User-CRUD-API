import { CreateAddressRepository } from "../../../../../src/adapter/repository/in-memory/Address/CreateAddressRepository";
import { Address } from "../../../../../src/domain/entity/Address";

describe("CreateAddressRepository", () => {

    const createAddressRepository = new CreateAddressRepository();
    const address = new Address("1", "Brasil", "RS", "Porto Alegre", "Centro Histórico", "Rua Cel. Fernando Machado", 613);

    it("should create a new address", () => {
        expect(createAddressRepository.create(address)).toBe(address);
    });
});