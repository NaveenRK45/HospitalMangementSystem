import { PatientService } from './../Apis/patient.service';
import { AdminService } from './../../Admin/Apis/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-reg',
  templateUrl: './patient-reg.component.html',
  styleUrls: ['./patient-reg.component.scss']
})
export class PatientRegComponent implements OnInit {
  
  LoginForm!:FormGroup
  doctors:any;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService,private PApi:PatientService){

  }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      patientname:['',[Validators.required]],
      password:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      emailid:['',[Validators.required]],
      problem:['',[Validators.required]],
      appointmentdate:['',[Validators.required]],
      address:['',[Validators.required]],
      doctorname:['',[Validators.required]],
      medicine:['',[Validators.required]]
    });
    this.Api.ViewDoctor().subscribe((res:any)=>{
      this.doctors = res;
    })
  }
  Login(){
    if(this.LoginForm.valid){
    const D = {
      patientname:this.LoginForm.get('patientname')?.value,
      password:this.LoginForm.get('password')?.value,
      mobileno:this.LoginForm.get('mobileno')?.value,
      emailid:this.LoginForm.get('emailid')?.value,
      problem:this.LoginForm.get('problem')?.value,
      appointmentdate:this.LoginForm.get('appointmentdate')?.value,
      address:this.LoginForm.get('address')?.value,
      doctorname:this.LoginForm.get('doctorname')?.value,
      medicine:this.LoginForm.get('medicine')?.value,
      
    }
    this.PApi.AddPatient(D).subscribe((res:any)=>{
      console.log(res,"check");
      alert("Patient Registered Successfully")
      this.Routes.navigate(['/Homepage/Patientlogin'])
    })
  }
}

}
