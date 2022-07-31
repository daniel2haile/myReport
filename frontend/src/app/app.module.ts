import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReportComponent } from './report-component/report.component';
import { ReportService } from './report-component/report.service';
import { FooterComponent } from './shared-component/footer/footer.component';
import { HeaderComponent } from './shared-component/header/header.componet';
import { HomeComponent } from './shared-component/home-componet/home.componet';
import { LoginComponent } from './user-component/login/login.component';
import { SignupComponent } from './user-component/signup/signup.component';
import { SignupService } from './user-component/signup/signup.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [SignupService, ReportService],
  bootstrap: [AppComponent],
})
export class AppModule {}
