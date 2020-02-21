/** Import common modules and all component for routing */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CourseComponent } from '../course/course.component';
import { ProgramComponent } from '../program/program.component';
import { TeachersComponent } from '../teachers/teachers.component';
import { ContactComponent } from '../contact/contact.component';
/** Define routes and their respoective component */
const appRoutes : Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'course', component: CourseComponent},
  { path: 'program', component : ProgramComponent},
  { path: 'teachers', component : TeachersComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo : '/home', pathMatch: 'full' }
]
/**Import routermodule for main maodule and export router module for use in app module */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RouteModule { }
