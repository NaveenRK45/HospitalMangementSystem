import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.scss']
})
export class ViewPatientsComponent implements OnInit{

  viewpatient:any;

  constructor(private Routes:Router,private Api:AdminService){}


  ngOnInit(): void {
    this.Api.ViewPatient().subscribe((res:any)=>{
      console.log(res,"check res");
      this.viewpatient= res;
    })
  }


}
