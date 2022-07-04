import { User } from "../../../../domain/entity/User";
import { ICreateUser } from "../../../ports/User/ICreateUser";
import { ICreateUserRepository } from "../../../ports/adapters/User/ICreateUserRepository";

export class CreateUser implements ICreateUser {

    private CreateUserRepository: ICreateUserRepository;

    public constructor(createUserRepo: ICreateUserRepository) {
        this.CreateUserRepository = createUserRepo;
    }

    //TESTE UNIT: deve chamar o createUserRepository enviando como param um obj USer com os mesmos dados recebidos
    public create(userId: string, userFullName: string): User {
        const user = new User(userId, userFullName);
        return this.CreateUserRepository.create(user);
    }
}