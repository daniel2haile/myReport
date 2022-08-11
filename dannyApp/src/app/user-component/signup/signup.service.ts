import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISignup } from '../user-models/signup.model';

@Injectable()
export class SignupService {
  private REGISTER_URL: string = 'http://localhost:8088/user/register';

  constructor(private http: HttpClient) {}
  registerUser(user: ISignup[]): Observable<ISignup[]> {
    return this.http.post<ISignup[]>(this.REGISTER_URL, user);
  }

  // isSignedup() {
  //   return !!localStorage.getItem('token');
  // }
}
