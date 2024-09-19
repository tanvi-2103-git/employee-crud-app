import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { DirectivesLearningComponent } from './directives-learning/directives-learning.component';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';
import { authGuard } from './gaurds/AuthGuard';
import { leaveView } from './gaurds/LeavePage';
import { CounterService } from './customservices/counter.service';

const childroutes:Routes=[
  {
    path:'directives',
    component:DirectivesLearningComponent
  },
  {
    path:'directives2',
    component:DirectivesLearningComponent
  },
  {
    path:'pipes',
    component:PipesLearningComponent,
    providers:[CounterService]
  },
  {
    path:'pipes2',
    component:PipesLearningComponent
  },
  {
    path:'pipes3',
    component:PipesLearningComponent
  }
]
const routes: Routes = [
  {

    path:'',

    redirectTo:'home',

    pathMatch:'full'

  },
  {
    path:'home',
    component:HomeComponent,
    children:childroutes
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'addemployee',
    component:EmployeeInputComponent,
    canActivate:[authGuard],
    canDeactivate:[leaveView]
  },
  {
    path:'editemployee/:_id',
    component:EmployeeInputComponent
  },
  {
    path:'adminlogin',
    component:AdminLoginComponent
  },
  {
    path:'**',
    component:ViewnotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
