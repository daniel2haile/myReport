import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './loginform.service';

@Component({
  selector: 'app-signup',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginError: string = '';
  loginForm!: FormGroup;
  loading: boolean = false;

  subscription!: Subscription;
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [, [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,3})$'),
        ]],

      password: ['', Validators.required],
    });
  }

  onLogin() {

    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe((res: any) => {
        if (res.status === 'success') { //Note: status === 'success' is from the backend query
          this.loginForm.value.email === "admin@gmail.com"? localStorage.setItem('RoleType', 'Admin') : localStorage.setItem('RoleType', 'User')
          localStorage.setItem('token', JSON.stringify(res.token));
          this.loginError = '';
          this.loginForm.reset();

          const role = localStorage.getItem('RoleType');
          
          if(role === 'Admin') {
            this.router.navigate(['/admindashboard']);
            console.log('admin router works! ')
          }else{
            this.router.navigate(['/userdashboard']);
            console.log('user router works! ');

          }

        } else {
          this.loginError = 'Invalid password and email!!';
        }
      });
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
