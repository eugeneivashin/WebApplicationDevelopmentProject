import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private endUrlLogin = 'http://localhost:8080/users/login';
  private endUrlRegister = 'http://localhost:8080/users';

  loginUser(user: User): Observable<User>{
    return this.httpClient.get<User>(`${this.endUrlLogin}?email=${user.email}&password=${user.password}`);
  }


  registerUser(user: User){
    return this.httpClient.post<User>(`${this.endUrlRegister}`, user);
  }

}
