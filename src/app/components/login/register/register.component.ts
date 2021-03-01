import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()  Islogued : boolean  = true;
  constructor() { }
  user: any = {
    Email:"",
    Nombre: "",
    Apellido:"",
    Password:""
     };
  ngOnInit(): void {
  }
}
