import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
this.signupForm = this.formBuilder.group({
  firstname : ['']
})
  }

  onSignup(){
  this.signupService
    .registerUser(this.signupForm.value)
    .subscribe((user: any) => {
      this.signupForm = user;
      console.log(user);
      localStorage.setItem('signup', JSON.stringify(user));
    });
  }
}
