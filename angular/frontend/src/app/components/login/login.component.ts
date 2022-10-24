import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private route: ActivatedRoute, 
              private router: Router,
              private userService: UserService) { }

  user2!: User;

  user: User = new User();

  ngOnInit(): void {
    }
    

  loginUser(item: any){

    this.loginService.loginUser(this.user).subscribe(
      data => {
        if (data === null)
        {
          this.router.navigateByUrl(`/posts`);
        }
        else{
          this.user = data;
          this.userService.currentUser.next(this.user);
          this.userService.isUserLoggedIn.next(true);
          this.router.navigateByUrl(`/`);
        }
      }
    );
  }

}
