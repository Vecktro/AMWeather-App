import { Component, OnInit ,Input} from '@angular/core';
import {UserService} from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
   Islogin : boolean  = true;
   IsAuditory: boolean = false;

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.Islogin = true;
  }
login(Email: HTMLInputElement, Password : HTMLInputElement){
    var login = {
      Email:Email.value,
      Password: Password.value
       };
     
    this.service.login(login).subscribe(res=>{
    alert("Bienvenido " + Email.value);  
    this.Islogin = false;
    this.IsAuditory = true;
             });
             
  sessionStorage.setItem("Email",Email.value);
  }
}
