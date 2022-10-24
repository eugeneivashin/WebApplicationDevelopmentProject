import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { User } from 'src/app/classes/user';
import { Comment } from 'src/app/classes/comment';
import { PostService } from 'src/app/services/post.service';

import { TagDefinition } from '@angular/compiler';
import { TagList } from 'src/app/classes/tag-list';
import { Tag } from 'src/app/classes/tag';


import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  post!: Post;
  user!: User;
  comments: Comment[] = [];
  commentUsers: User[] = [];
  tags: Tag[] = [];

  newComment : Comment = new Comment();

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

    commentForm = this.formBuilder.group({
      comment_text: '',
    })


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.displayPost();
    })
  }

  sendComment(item: any){
    this.postService.sendComment(this.newComment).subscribe(
      data => {
        this.postService.currentComment.next(data);
      }
    );
  }


  getCommentUser(){
    let tempCommentUser!: User;

    for (let i = 0; i < this.comments.length; i++) {

      this.postService.getUserByComment(this.comments[i].id).subscribe(
        data => {
          tempCommentUser = data;
          this.commentUsers.push(tempCommentUser);
        });

    }

  }

  getTags(tag_list: TagList[]){

      let tempTags: Tag[]=[];
  
      for (let i = 0; i < tag_list.length; i++) {
          this.postService.getPostTags(tag_list[i]).subscribe(
            data => {
              tempTags.push(data);
            }
          )
        this.tags = tempTags;
      }
    
  }


  searchForPosts(tag: Tag) {
    this.router.navigateByUrl(`/search/${tag.title}`);
  }



  displayPost(){

    const postId: number = +this.route.snapshot.paramMap.get("id")!;


    this.postService.getSinglePost(postId).subscribe(
      data => {
        this.post = data;
        console.log(this.post)
        this.getTags(this.post.tag_lists);
      }
    )

    this.postService.getUserByPost(postId).subscribe(
      data => {
        this.user = data;
      }
    )

    this.postService.getCommentsByPost(postId).subscribe(
      data => {
        this.comments = data;
        this.getCommentUser();
      }
    )
      /*
    this.postService.getCommentByPost(postId).subscribe(
      data => {
        this.user = data;
      }
    )
    */


  }
}