import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserGaurdService } from './guards/user.guard';
import { ProfileComponent } from './profile-component/profile.component';
import { ReportComponent } from './report-component/report.component';
import { LoginComponent } from './user-component/login/login.component';
import { SignupComponent } from './user-component/signup/signup.component';
import { UsersListComponent } from './users-list-component/userlist.component';

const USER_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'report', canActivate: [AuthGuard],component: ReportComponent },
  {
    path: 'userslist',
    component: UsersListComponent,
  },
  {
    path: 'profile/:user_id',

    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(USER_ROUTES)],

  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
