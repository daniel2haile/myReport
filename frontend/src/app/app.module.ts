import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-component/header/header.componet';
import { HomeComponent } from './shared-component/home-componet/home.componet';
import { LoginComponent } from './user-component/login/login.component';
import { SignupComponent } from './user-component/signup/signup.component';
import { SignupService } from './user-component/signup/signup.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [SignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
