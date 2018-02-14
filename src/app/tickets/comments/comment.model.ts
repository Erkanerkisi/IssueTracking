import { Ticket } from "../ticket/ticket.model";

export class Comment {
    public CommentId: number;
    public ticketId:number; 
    public CommentDesc: string;

    constructor(CommentId: number,
                ticketId:number,
                CommentDesc: string
    ) {
        this.CommentId = CommentId;
        this.ticketId = ticketId;
        this.CommentDesc = CommentDesc;
    }
}