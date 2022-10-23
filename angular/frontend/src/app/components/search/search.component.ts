import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    currentUser: User = new User();
    isUserLoggedIn: boolean = false;

  constructor(private postService: PostService,
    private router: Router,
    private userService: UserService) {

      this.userService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;
    });

    this.userService.currentUser.subscribe(value => {
      this.currentUser = value;
  });
     }


  ngOnInit(): void {
  }



  searchForPosts(textInput: string) {
    console.log(`text is = ${textInput}`);
    this.router.navigateByUrl(`/search/${textInput}`);
  }
}
