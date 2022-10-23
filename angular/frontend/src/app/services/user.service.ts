import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User());

  constructor(private http: HttpClient) { }


}

