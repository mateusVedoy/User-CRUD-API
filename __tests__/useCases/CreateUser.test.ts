import { CreateUserRepository } from "../../src/adapter/repository/in-memory/User/CreateUserRepository"
import { CreateUser } from "../../src/application/useCases/User/create-user/CreateUser";
import { User } from "../../src/domain/entity/User";

jest.mock('../../src/adapter/repository/in-memory/UserRepository');
jest.mock('../../src/domain/entity/User');
jest.mock('../../src/application/useCases/User/create-user/CreateUser');

const CreateUserRepositoryMock = CreateUserRepository as jest.Mock<CreateUserRepository>;
const UserMock = User as jest.Mock<User> as jest.Mock<User>;
const CreateUserMock = CreateUser as jest.Mock<CreateUser>;

describe('CreateUser use case', () => {

    const createUserRepositoryTest = new CreateUserRepositoryMock() as jest.Mocked<CreateUserRepository>;
    const createUserTest = new CreateUserMock(createUserRepositoryTest);
    const usr = new UserMock('1', 'mateus vedoy');

    //aqui só valida se chama o repo
    it('should call CreateUserRepository', () => {
        expect(createUserRepositoryTest).toBeCalled;
    });
    //aqui valida se retorna obj
    it('should return a valid User object containing the same data received and returning that new User Object', () => {
        //console.log(createUserRepositoryTest.create(usr))
        console.log(createUserTest.create('1', 'mateus vedoy'))
        expect(createUserTest.create('1', 'mateus vedoy')).toBe(usr);
    });
});