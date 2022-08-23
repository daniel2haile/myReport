import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class UserGaurdService implements CanActivate {
  token: string | null = '';
  role: string | null = '';

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.token = localStorage.getItem('token');
    this.role = localStorage.getItem('RoleType');

    if (this.token == null) {
      this.router.navigate(['/login']);
      return false;
    }
    if (this.token !== null && this.role === 'Admin') {
      this.router.navigate(['/admindashboard']);
      return false;
    }
    if (this.token !== null && this.role === 'User') {
      this.router.navigate(['/userdashboard']);
      return false;
    }
    return false;
  }
}
