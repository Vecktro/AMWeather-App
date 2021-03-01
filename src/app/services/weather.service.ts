import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http : HttpClient) { 
  }
  getWeather(cityName: string, countryCode: string){
     return  this.http.get(`${environment.ApiWeatherUrl}${cityName},${countryCode}`);
  }
}
