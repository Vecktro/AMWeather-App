import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(val:any):Observable<any[]>{
    return  this.http.post<any>(environment.ApiUser + 'user/',val);
 
  }
  login(val:any):Observable<any[]>{
    return  this.http.post<any>(environment.ApiUser + 'user/login/',val);
  }
  
}

