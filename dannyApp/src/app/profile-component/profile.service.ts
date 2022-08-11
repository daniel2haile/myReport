import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfile } from './profile.model';


@Injectable()
export class ProfileService {
  private _PROFILE_URL: string = 'http://localhost:8088/user';
  constructor(private http: HttpClient) {}

  getProfile(): Observable<IProfile> {
    return this.http.get<IProfile>(this._PROFILE_URL);
  }

  getUsereById(user_id : string): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(`${this._PROFILE_URL}/ ${user_id}`);
  }
}
