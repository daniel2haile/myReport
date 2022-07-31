import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report-component/report.component';
import { SignupComponent } from './user-component/signup/signup.component';

const USER_ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(USER_ROUTES),
  ],

  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
