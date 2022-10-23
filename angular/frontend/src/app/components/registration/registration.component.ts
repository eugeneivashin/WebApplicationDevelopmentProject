import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();

  constructor(private loginService: LoginService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(item: any){
    this.loginService.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        this.userService.currentUser.next(data);
        this.userService.isUserLoggedIn.next(true);
        this.router.navigateByUrl(`/`);
      }
    );
  }

}
