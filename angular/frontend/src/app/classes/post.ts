export class Post {
    constructor(
        public id: number,
        public post_title: string,
        public post_description: string,
        public post_image: string,
        public post_upvote: number,
        public post_downvote: number,
        public post_date: Date
        ) {}
}
