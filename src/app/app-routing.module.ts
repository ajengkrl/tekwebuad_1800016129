import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD


const routes: Routes = [];
=======
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';

const routes: Routes = [
{
	path:'home',
	component:HomeComponent
},
{
	path:'student',
	component:StudentComponent
},
{
	path:'teacher',
	component:TeacherComponent
}
];
>>>>>>> 6aea6d22a07d72f22c3ce69807bbc025dde968f7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
