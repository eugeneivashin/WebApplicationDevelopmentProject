import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.displayPosts();
  }

  displayPosts(){
    this.postService.getAllPosts().subscribe(
      data => {
        this.posts = data;
      }
    )
  }



}
