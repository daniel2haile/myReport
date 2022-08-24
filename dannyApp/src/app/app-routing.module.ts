import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
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

  {
    path: 'userdashboard',
    loadChildren: () =>
      import('./dashboards/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'userslist',
    loadChildren: () =>
      import('./dashboards/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
  },

  {
    path: 'profile/:user_id',
    loadChildren: () =>
      import('./dashboards/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
  },
  {
    path: 'admindashboard',
    loadChildren: () =>
      import('./dashboards/admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [HttpClientModule, BrowserModule, RouterModule.forRoot(USER_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
