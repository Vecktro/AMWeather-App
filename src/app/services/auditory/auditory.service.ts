import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable()
export class AuditoryService {

  constructor(private http: HttpClient) { }

  AddRegisterAuditory(val:any):Observable<any[]>{
    return  this.http.post<any>(environment.ApiUser + 'weatherauditory/' ,val);
  }
 
  GetRegisterAuditory():Observable<any[]>{
    return  this.http.get<any>(environment.ApiUser + 'weatherauditory/');
  }
}
