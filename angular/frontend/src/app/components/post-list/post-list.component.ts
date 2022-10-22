import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { Tag } from 'src/app/classes/tag';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  searchMode: boolean = false;
  tags: Tag[] = [];

  //currentPostId: number = 1;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      //this.displayPosts2();
      this.displayPosts();
    })
  }

  displayPosts(){


    this.posts.splice(0);
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      this.method1();
    }
    else{
      this.getAllPosts();
    }
  }

  getAllPosts(){
    this.postService.getAllPosts().subscribe(
      data => {
        this.posts = data;
      }
    )
  }

  method1(){

    const searchKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    let tempPosts: Post[]=[];

    var splitted = searchKeyword.split(" ", 10);

    for (let i = 0; i < splitted.length; i++) {
        console.log(splitted[i])
        this.postService.searchPostsByTags(splitted[i]).subscribe(
          data => {
            for (let i = 0; i < data.length; i++)
            {
              tempPosts.push(data[i]);
            }
          }
        )
      this.posts = tempPosts;
    }
  }


/*
  upvote(post: Post){
    this.postService.upvote();
  }
  */

  /*        test


  displayPosts2(){

    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");

    if (hasCategoryId){
      this.currentPostId = +this.route.snapshot.paramMap.get("id")!;
      // + to convert int to string, ! to tell, that value is not null
    }
    else{
      this.currentPostId = 1;
    }

    this.postService.getAllPosts2(this.currentPostId).subscribe(
      data => {
        this.posts = data;
      }
    )
  }
  */



}
