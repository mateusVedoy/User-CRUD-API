import { User } from "domain/entity/User";

export interface IDeleteUserRepository {
    delete(user: User): void;
}