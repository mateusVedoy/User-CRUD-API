
export class User {

    private userId: string;
    private userFullName: string;
    
    constructor(id: string, fullName: string) {
        this.setUserId(id);
        this.setUserFullName(fullName);
    }

    public getUserId(){
        return this.userId;
    }

    public setUserId(userId: string){
        this.userId = userId;
    }

    public getUserFullName(){
        return this.userFullName;
    }

    public setUserFullName(userFullName: string){
        this.userFullName = userFullName;
    }
}