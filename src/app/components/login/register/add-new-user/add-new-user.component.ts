import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
  providers:[UserService]
})
export class AddNewUserComponent implements OnInit {

  constructor(private service: UserService) { }
  
  ngOnInit(): void {
  }
  @Input()


 
  registerUser(Nombre: HTMLInputElement ,Apellido : HTMLInputElement,Email: HTMLInputElement, Password : HTMLInputElement){
    var user = {
      Email:Email.value,
      Nombre: Nombre.value,
      Apellido: Apellido.value,
      Password: Password.value
       };
    this.service.registerUser(user).subscribe(res=>{
    alert(res.toString());        
             });
  }

}
