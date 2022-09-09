import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGaurdService } from './guards/user.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile-component/profile.component';
import { ReportComponent } from './report-component/report.component';
import { LoginComponent } from './user-component/login/login.component';
import { SignupComponent } from './user-component/signup/signup.component';
import { UsersListComponent } from './users-list-component/userlist.component';

const USER_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admindashboard',

    // canActivate: [AuthGuard],
    component: AdminDashboardComponent,
    children: [{ path: 'userslist', component: UsersListComponent,

  }],
  },
  // { path: 'userslist', component: UsersListComponent },
  { path: 'profile/:user_id', component: ProfileComponent },
  { path: 'report', component: ReportComponent },

  {
    path: 'userdashboard',
    // canActivate: [UserGaurdService],
    component: UserDashboardComponent,
  },

  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full' ,
  component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(USER_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
