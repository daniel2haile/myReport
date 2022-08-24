import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { ReportComponent } from 'src/app/report-component/report.component';

const USER_DASHBOARD_ROUTES : Routes = [
{ path : '', component : UserDashboardComponent},
//  children: [
  { path : '', redirectTo: 'dashboard', pathMatch : 'full'},
  { path : 'report', component : ReportComponent}
//  ]

]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(USER_DASHBOARD_ROUTES)],
})
export class UserDashboardModule {}
