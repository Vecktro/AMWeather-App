import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/login/weather/weather.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/login/register/register.component';
import {AddNewUserComponent} from './components/login/register/add-new-user/add-new-user.component';
import {AuditoryComponent} from './components/login/auditory/auditory.component';

const routes: Routes = [
  {path:"weather",component: WeatherComponent},
  {path:"login",component: LoginComponent},
  {path:"register",component: RegisterComponent},
  {path:"addnewuser",component: AddNewUserComponent},
  {path:"auditory",component: AuditoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
