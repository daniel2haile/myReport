import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserGaurdService } from './guards/user.guard';
import { MyModule } from './modules/my.module';
import { MyPipe } from './pipes/my.pipe';
import { ProfileComponent } from './profile-component/profile.component';
import { ProfileService } from './profile-component/profile.service';
import { ReportComponent } from './report-component/report.component';
import { ReportService } from './report-component/report.service';
import { FooterComponent } from './shared-component/footer/footer.component';
import { HeaderComponent } from './shared-component/header/header.componet';
import { HomeComponent } from './shared-component/home/home.componet';
import { LoginComponent } from './user-component/login/login.component';
import { LoginService } from './user-component/login/loginform.service';
import { SignupComponent } from './user-component/signup/signup.component';
import { SignupService } from './user-component/signup/signup.service';
import { UsersListComponent } from './users-list-component/userlist.component';
import { UserDashboardComponent } from './dashboards/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './shared-component/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReportComponent,
    ProfileComponent,
    UsersListComponent,
    MyPipe,
    UserDashboardComponent,
    AdminDashboardComponent,
    AboutComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    MyModule
  ],
  providers: [SignupService, ReportService, LoginService, ProfileService, UserGaurdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
