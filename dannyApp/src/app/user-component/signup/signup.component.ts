import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  // AsyncValidatorFn,
  // ValidationErrors,
  // FormControl,
  // AbstractControl,
} from '@angular/forms';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls : ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm!: FormGroup;
  subscription!: Subscription;

  signupError: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private service: SignupService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      current_city: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  //Register method
  onRegister(signupForm: FormGroup) {
    if (signupForm.valid) {
      this.subscription = this.service
        .registerUser(signupForm.value)
        .subscribe((res: any) => {
          if (res.status === 'success') {
            localStorage.setItem('STORAGE', JSON.stringify(res));
            console.log(`get the response`, res);
            this.router.navigate(['/login']);
            this.signupError = '';
          } else {
            this.signupError = 'Sign up faild. Please try again!!!';
          }
        });
    }
  }

  ngOnDestroy() {
    if (!this.subscription) {
      return;
    } else {
      this.subscription.unsubscribe();
    }
  }
}
