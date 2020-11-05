import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ProcessComponent } from './process/process.component';
import { CurrentCoursesComponent } from './process/current-courses/current-courses.component';
import { PastCoursesComponent } from './process/past-courses/past-courses.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProcessComponent,
    CurrentCoursesComponent,
    PastCoursesComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
