import { User } from "domain/entity/User";

export abstract class UserRepository {

    static users = [];

    public setUser(user: User): User{
        UserRepository.users.push(user);
        return user;
    }

    public getUsers(): User[]{
        return UserRepository.users;
    }
}