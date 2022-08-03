import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/user-component/login/loginform.service';
import { SignupService } from 'src/app/user-component/signup/signup.service';


@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

     constructor(
      public loginService: LoginService,
      public signupService: SignupService
      ){}

  ngOnInit(): void {

  }

}
