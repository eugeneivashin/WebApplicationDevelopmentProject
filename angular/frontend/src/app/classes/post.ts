import { Tag } from "./tag";
import { TagList } from "./tag-list";
import { User } from "./user";

export class Post {

    id!: number;
    title!: string;
    post_description!: string;
    post_image!: string;
    post_upvote!: number;
    post_downvote!: number;
    post_date!: Date;

    comments: Comment [] = [];
    tag_lists: TagList [] =[];
    tags: Tag [] = [];

    /*
    constructor(
        public id: number,
        public title: string,
        public post_description: string,
        public post_image: string,
        public post_upvote: number,
        public post_downvote: number,
        public post_date: Date
        ) {}

        */
       
}
