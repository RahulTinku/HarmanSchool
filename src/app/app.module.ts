import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { ProgramComponent } from './program/program.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactComponent } from './contact/contact.component';
import { RouteModule } from './route/route.module';
import { EqualValidator } from './common/equal-validator.directive';
/**Add font awesome module for using free font awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/** Declare/Import all dependencies  */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CourseComponent,
    ProgramComponent,
    TeachersComponent,
    ContactComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouteModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
