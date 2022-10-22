import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  searchMode: boolean = false;
  //currentPostId: number = 1;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      //this.displayPosts2();
      this.displayPosts();
    })
  }

  displayPosts(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    console.log(this.searchMode);

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
  

  method1(): void{

    const searchKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    console.log(searchKeyword);

    this.postService.searchPosts(searchKeyword).subscribe(
      data => {
        this.posts = data;
      }
    )


  }

  /*        test ne trogat

  upvote(Post post){
    this.postService.upvote();
  }

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
