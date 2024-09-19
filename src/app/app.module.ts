import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { EmployeeInputComponent } from './employee-input/employee-input.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { DirectivesLearningComponent } from './directives-learning/directives-learning.component';
import { PipesLearningComponent } from './pipes-learning/pipes-learning.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    EmployeeComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    DecoratorComponent,
    OrderbyPipe,
    EmployeeInputComponent,
    AdminLoginComponent,
    HomeComponent,
    ViewnotfoundComponent,
    DirectivesLearningComponent,
    PipesLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
