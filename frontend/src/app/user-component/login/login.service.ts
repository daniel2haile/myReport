import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ILogin } from '../user-models/login.model'
@Injectable()
export class LoginService {
  private LOGIN_URL = 'http://localhost:8080/user/login';
  constructor(private http: HttpClient) {}

  registerUser(user: ILogin[]): Observable<ILogin[]> {
    return this.http.post<ILogin[]>(this.LOGIN_URL, user);
  }
}
