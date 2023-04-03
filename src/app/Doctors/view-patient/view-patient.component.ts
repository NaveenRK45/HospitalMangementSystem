import { AddMedicineComponent } from './../add-medicine/add-medicine.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Apis/doctor.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit{

  viewpatient:any;

  constructor(private Routes:Router,private Api:DoctorService,private dialog:MatDialog){}
  ngOnInit(): void {
    this.Api.ViewPatient().subscribe((res:any)=>{
      this.viewpatient = res;
    })
  }
  Add(a:any){
    this.dialog.open(AddMedicineComponent,{
      width:"30%",
      height:"83%",
      data:a
    })
  }
}
