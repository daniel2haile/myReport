import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ISignup } from '../user-models/signup.model'
@Injectable()
export class SignupService {
  private SIGNUP_URL = 'http://localhost:8080/user/register';
  constructor(private http: HttpClient) {}

  registerUser(user: ISignup[]): Observable<ISignup[]> {
    return this.http.post<ISignup[]>(this.SIGNUP_URL, user);
  }

}
