
export class User {

    public userId: string;
    public userFullName: string;
    
    constructor(id: string, fullName: string) {
        this.userId = id;
        this.userFullName = fullName;
    }
}