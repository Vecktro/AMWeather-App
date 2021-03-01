import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) { }

  TakeForecast():Observable<any[]>{
    return  this.http.get<any>(environment.ApiUser + 'weatherforecast');
 
  }
}
