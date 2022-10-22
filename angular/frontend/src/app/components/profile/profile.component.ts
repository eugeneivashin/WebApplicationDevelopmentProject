import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
import { PostService } from 'src/app/services/post.service';
import { Post  } from 'src/app/classes/post';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  posts : Post[] = [];
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.displayUser();
    })
  }

  displayUser(){

    const userId: number = +this.route.snapshot.paramMap.get("id")!;

    this.postService.getSingleUser(userId).subscribe(
      data => {
        this.user = data;
      }
    )
  }
}
