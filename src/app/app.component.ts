import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service';
import {UserService} from "src/app/services/user/user.service";
import {ForecastService} from "src/app/services/weather/forecast.service";
import {AuditoryService} from 'src/app/services/auditory/auditory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,WeatherService,ForecastService,AuditoryService]
})
export class AppComponent implements OnInit{
  constructor(){

  }
  ngOnInit(){ 
  }
  
}
