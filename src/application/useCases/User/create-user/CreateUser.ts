import { User } from "../../../../domain/entity/User";
import { TUser } from "domain/types/TUser";
import { ICreateUser } from "../../../ports/useCases/User/ICreateUser";
import { ICreateUserRepository } from "../../../ports/adapters/repository/User/ICreateUserRepository";
import { IIdGenerator } from "application/ports/adapters/helper/IIdGenerator";

export class CreateUser implements ICreateUser {

    private CreateUserRepository: ICreateUserRepository;
    private IdGen: IIdGenerator;

    public constructor(createUserRepo: ICreateUserRepository, idGen: IIdGenerator) {
        this.CreateUserRepository = createUserRepo;
        this.IdGen = idGen;
    }

    //TESTE UNIT: deve chamar o createUserRepository enviando como param um obj USer com os mesmos dados recebidos
    public create(fullName: string, cellPhoneDDI: string, cellPhoneDDD: string, cellPhone: string, email: string, login: string, pass: string, recoverEmail: string, addressId: string): TUser {
        const userId: string = this.IdGen.idGen();
        const user = new User(userId, fullName, cellPhoneDDI, cellPhoneDDD, cellPhone, email, login, pass, recoverEmail, addressId);
        this.CreateUserRepository.create(user);
        return user.toString();
    }
}