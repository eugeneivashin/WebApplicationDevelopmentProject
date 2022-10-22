import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { User } from 'src/app/classes/user';
import { Comment } from 'src/app/classes/comment';
import { PostService } from 'src/app/services/post.service';


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

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.displayPost();
    })
  }


  getCommentUser(){
    let tempCommentUser!: User;

    for (let i = 0; i < this.comments.length; i++) {

      this.postService.getUserByComment(this.comments[i].id).subscribe(
        data => {
          tempCommentUser = data;
          console.log(tempCommentUser.username)
          this.commentUsers.push(tempCommentUser);
        });

        console.log(this.commentUsers[0])
    }

    console.log(this.commentUsers)
  }

  displayPost(){

    const postId: number = +this.route.snapshot.paramMap.get("id")!;

    this.postService.getSinglePost(postId).subscribe(
      data => {
        this.post = data;
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