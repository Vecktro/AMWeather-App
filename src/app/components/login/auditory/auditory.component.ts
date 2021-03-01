import { Component, Input, OnInit } from '@angular/core';
import {AuditoryService} from 'src/app/services/auditory/auditory.service';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.component.html',
  styleUrls: ['./auditory.component.css']
})
export class AuditoryComponent implements OnInit {
  @Input()  AuditoryActive : boolean  = false;
  constructor(private service : AuditoryService) { }
  AuditoryFields: any =[] ;
  ngOnInit(): void {
  }
  refreshAuditoryList(){
    this.service.GetRegisterAuditory().subscribe(data=>{
      this.AuditoryFields  = data;
      console.log(this.AuditoryFields);
    });
  }
}
