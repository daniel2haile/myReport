import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from 'src/app/report-component/report.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { UsersListComponent } from 'src/app/users-list-component/userlist.component';
import { ProfileComponent } from 'src/app/profile-component/profile.component';

const ADMIN_DASHBOARD_ROUTES: Routes = [
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'userslist',
        component: UsersListComponent,
        children: [{ path: 'profile/:user_id', component: ProfileComponent }],
      },
    ],
  },
  // children: [
  // { path: '', redirectTo: 'admindashboard', pathMatch: 'full' },
  { path: 'report', component: ReportComponent },

  // ],
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ADMIN_DASHBOARD_ROUTES)],
  exports: [RouterModule],
})
export class AdminDashboardModule {}
