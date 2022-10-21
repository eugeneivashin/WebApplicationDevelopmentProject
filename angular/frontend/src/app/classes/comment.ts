export class Comment {
    constructor(
        public id: number,
        public comment_text: string,
        public comment_upvote: number,
        public comment_downvote: number,
        public comment_reply_to: number,
        public comment_date: Date
        ) {}
}
