import { Comment } from "../comments/comment.model";
import { User } from "../../users/user.model";



export class Ticket{
    public ticketId:number;
    public ticketName: string;
    public ticketSubject: string;
    public ticketDescription:string;
    public ticketStatus:string;
    public ticketType:string;
    public ticketassigneduser:User;
    public ticketcreateduser:User;
    public comments : Comment[];

    constructor(ticketId:number,
                ticketName:string,
                ticketSubject:string,
                ticketDescription :string,
                ticketStatus :string,
                ticketType :string,
                ticketassigneduser :User,
                ticketcreateduser :User,
                comments : Comment[]
            ){
        this.ticketId = ticketId;
        this.ticketName=ticketName;
        this.ticketSubject = ticketSubject;
        this.ticketDescription=ticketDescription;
        this.ticketStatus=ticketStatus; 
        this.ticketType=ticketType; 
        this.ticketassigneduser=ticketassigneduser; 
        this.ticketcreateduser=ticketcreateduser;
        this.comments = comments; 
        
    }
}