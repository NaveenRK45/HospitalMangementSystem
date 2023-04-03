import { DeleteDoctorComponent } from './../delete-doctor/delete-doctor.component';
import { EditDoctorComponent } from './../edit-doctor/edit-doctor.component';
import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.scss']
})
export class ViewDoctorComponent implements OnInit {

  ViewDoctors:any;

  constructor(private Routes:Router,private Api:AdminService,private dialog:MatDialog){}

  ngOnInit(): void {
    this.Api.ViewDoctor().subscribe((res:any)=>{
      this.ViewDoctors = res;
      console.log(this.ViewDoctors,"check");
      
    })
  }
  edit(e:any){
    this.dialog.open(EditDoctorComponent,{
      width:"45%",
      height:"87%",
      data:e
    })
  }
  deleteDoctor(d:any){
    this.dialog.open(DeleteDoctorComponent,{
      width:"25%",
      data:d
    })
  }


}
