import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ILogin } from '../user-models/login.model';

@Injectable()
export class LoginService {
  private LOGIN_URL: string = 'http://localhost:8088/user/login';
  loginError: any;
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(this.LOGIN_URL, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('RoleType');
    this.router.navigate(['/login']);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
