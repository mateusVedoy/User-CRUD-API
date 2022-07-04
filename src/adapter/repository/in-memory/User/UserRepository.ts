import { User } from "domain/entity/User";

export abstract class UserRepository {

    static users = [];

    public setUser(user: User){
        UserRepository.users.push(user)
    }

    public getUsers(){
        return UserRepository.users;
    }
}