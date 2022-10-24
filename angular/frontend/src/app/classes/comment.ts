import { User } from "./user";

export class Comment {

    id!: number;
    comment_text!: string;
    comment_upvote!: number;
    comment_downvote!: number;
    comment_reply_to!: number;
    comment_date!: Date;
    user!: User;
/*
    constructor(
        id: number,
        comment_text: string,
        comment_upvote: number,
        comment_downvote: number,
        comment_reply_to: number,
        comment_date: Date
        ) {
            this.id = id;
            this.comment_text = comment_text;
            this.comment_upvote = comment_upvote;
            this.comment_downvote = comment_downvote;
            this.comment_reply_to = comment_reply_to;
            this.comment_date = comment_date;
        }*/
    
}
