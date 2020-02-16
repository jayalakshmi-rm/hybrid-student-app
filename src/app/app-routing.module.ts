import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPage } from './register/register.page';

const routes: Routes = [
  { path: 'student', loadChildren: './student/student.module#StudentPageModule' },
  { path: 'register', component: RegisterPage },
  { path: '', loadChildren: './login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
