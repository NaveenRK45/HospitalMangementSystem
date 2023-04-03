import { PatientService } from './../Apis/patient.service';
import { AdminService } from './../../Admin/Apis/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pat-profile',
  templateUrl: './pat-profile.component.html',
  styleUrls: ['./pat-profile.component.scss']
})
export class PatProfileComponent implements OnInit {
 
  EditForm!:FormGroup
  doctors:any
 myProfile:any
  constructor(private Routes:Router,
              private fb:FormBuilder,
              private Api:AdminService,
              private PApi:PatientService
    ){

  }

  ngOnInit(): void {
    let pName= JSON.parse(localStorage.getItem('patient')!).patientname
    
   
    this.EditForm = this.fb.group({
      patientname:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      problem:['',[Validators.required]],
      appointmentdate:['',[Validators.required]],
      address:['',[Validators.required]],
      doctorname:['',[Validators.required]],
      medicine:['',[Validators.required]]
    });
    this.PApi.ViewProfile(pName).subscribe((res:any)=>{
      this.myProfile=res
      console.log(this.myProfile);
      this.EditForm.patchValue({
        patientname:this.myProfile.patientname,
        mobileno:this.myProfile.mobileno,
        emailid:this.myProfile.emailid,
        problem:this.myProfile.problem,
        appointmentdate:this.myProfile.appointmentdate,
        address:this.myProfile.address,
        doctorname:this.myProfile.doctorname,
        medicine:this.myProfile.medicine
      })
       
     })
 
    this.Api.ViewDoctor().subscribe((res:any)=>{
      this.doctors = res
    });
  
  }

  Edit(){
    if(this.EditForm.valid){
    this.PApi.EditPatient(this.myProfile._id,this.EditForm.value).subscribe((res:any)=>{
      console.log(res,"check");
    alert("Updated Successfully")   
    })
  }
  }
}
