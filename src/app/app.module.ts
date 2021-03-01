import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './components/login/weather/weather.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { AddNewUserComponent } from './components/login/register/add-new-user/add-new-user.component';
import { AuditoryComponent } from './components/login/auditory/auditory.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoginComponent,
    RegisterComponent,
    AddNewUserComponent,
    AuditoryComponent
  ],
  exports:[
  RegisterComponent,
  LoginComponent,
  WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
