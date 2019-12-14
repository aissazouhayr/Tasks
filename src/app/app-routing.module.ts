import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { RouterModule, Routes } from '@angular/router';
import { taskListComponent } from './Task/TaskList.component';
import { TaskEditComponent } from './Task/taskEdit.component';
import { LoginComponent } from './LoginRegistration/Login.component';
import { RegisterComponent } from './LoginRegistration/Register.component';
import { ComponenetGuardsService } from './Gaurds/componenet-guards.service';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
 
  { path: 'taskList', component: taskListComponent, canActivate:[ComponenetGuardsService] },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'EditTask', component: TaskEditComponent, canActivate:[ComponenetGuardsService] },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];






@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
