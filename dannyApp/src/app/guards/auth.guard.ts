import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {


  token: string | null = '';
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.router.navigate(['/login']);
      console.log('token inside guard - ', this.token)
      return false;
    }
    return true;
  }
}
