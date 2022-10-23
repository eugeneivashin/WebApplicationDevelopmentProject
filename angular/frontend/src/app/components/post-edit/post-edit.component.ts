import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  post!: Post;

  constructor (private postService: PostService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getPost(){
    const postId: number = +this.route.snapshot.paramMap.get("id")!;

    this.postService.getSinglePost(postId).subscribe(
      data => {
        this.post = data;
      }
    )
  }
}
