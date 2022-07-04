import { FindAllAddressesRepository } from "../../../adapter/repository/in-memory/Address/FindAllAddressesRepository";
import { CreateAddressController, FindAllAddressesController } from "../../../adapter/controller/Address/AddressController";
import { CreateAddressRepository } from "../../../adapter/repository/in-memory/Address/CreateAddressRepostory";
import { CreateAddress } from "../../../application/useCases/Address/create-address/CreateAddress";
import { FindAllAddresses } from "../../../application/useCases/Address/findAll-addresses/FindAllAddresses";

const createAddressRepo = new CreateAddressRepository();
const findAllAddressesRepo = new FindAllAddressesRepository();
const createAddressService = new CreateAddress(createAddressRepo);
const findAllAddressesService = new FindAllAddresses(findAllAddressesRepo);
const createAddressControl = new CreateAddressController(createAddressService);
const findAllAddressesControl = new FindAllAddressesController(findAllAddressesService);

export {
    createAddressControl,
    findAllAddressesControl
}
