import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-component/login/login.component';
import { SignupComponent } from './user-component/signup/signup.component';

const USER_ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(USER_ROUTES),
  ],
})
export class AppRoutingModule {}
