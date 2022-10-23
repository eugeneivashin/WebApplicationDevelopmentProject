import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userService: any;

  constructor(private loginService: LoginService,
              private route: ActivatedRoute, 
              private router: Router) { }

  user!: User;

  ngOnInit(): void {
    }
    

  loginUser(item: any){

    this.loginService.loginUser(item.email, item.password).subscribe(
      data => {
        console.log(data)
        this.userService.currentUser.next(data);
        this.userService.isUserLoggedIn.next(true);
        this.router.navigateByUrl(`/`);
      }
    );
  }

}
