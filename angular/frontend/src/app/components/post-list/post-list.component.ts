import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { Tag } from 'src/app/classes/tag';
import { TagList } from 'src/app/classes/tag-list';
import { User } from 'src/app/classes/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  searchMode: boolean = false;
  tags: Tag[][] = [];
  tagPostMap = new Map<Tag[], Post>();

  currentUser: User = new User();

  //currentPostId: number = 1;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
                this.userService.currentUser.subscribe(value => {
                  this.currentUser = value;
              });
               }

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
    this.postService.getAllPostsTest().subscribe(
      data => {
        this.posts = data;
        this.getTags();
      }
    )
  }

  method1(){

    const searchKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    let tempPosts: Post[]=[];
        this.postService.searchPostsByTags(searchKeyword).subscribe(
          data => {
            this.posts = data;
            this.getTags();
          }
        )
  }


  searchForPosts(tag: Tag) {
    this.router.navigateByUrl(`/search/${tag.title}`);
  }


  getTags(){
    for (let i = 0; i < this.posts.length; i++) {
      let tempTags: Tag[]=[];
      for (let u = 0; u < this.posts[i].tag_lists.length; u++) {
          this.postService.getPostTags(this.posts[i].tag_lists[u]).subscribe(
            data => {
              tempTags.push(data)
            }
          )
      }
      this.tags.push(tempTags)
  }
}

/*
  upvote(post: Post){
    this.postService.upvote();
  }
  */


}
