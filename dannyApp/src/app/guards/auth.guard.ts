import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../user-component/login/loginform.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _loginService: LoginService) {}
  canActivate(): boolean {
    if (this._loginService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
