import { CreateAddressController, FindAllAddressesController } from "../../../adapter/controller/Address/AddressController";
import { CreateAddressRepository } from "../../../adapter/repository/in-memory/AddressRepository";
import { CreateAddress } from "../../../application/useCases/Address/create-address/CreateAddress";
import { FindaAllAddresses } from "../../../application/useCases/Address/findAll-addresses/FindAllAddresses";

const createAddressRepo = new CreateAddressRepository();
const createAddressService = new CreateAddress(createAddressRepo);
const findAllAddressesService = new FindaAllAddresses(createAddressRepo);
const createAddressControl = new CreateAddressController(createAddressService);
const findAllAddressesControl = new FindAllAddressesController(findAllAddressesService);

export {
    createAddressControl,
    findAllAddressesControl
}
