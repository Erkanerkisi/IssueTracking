export class User {
    public userId: number;
    public userName: string;
    public userFullName: string;
    public userEmail: string;
    public userPass: string;


    constructor(userId: number,
        userName: string,
        userFullName: string,
        userEmail: string,
        userPass: string
    ) {
        this.userId = userId;
        this.userName = userName;
        this.userFullName = userFullName;
        this.userEmail = userEmail;
        this.userPass = userPass;

    }
}