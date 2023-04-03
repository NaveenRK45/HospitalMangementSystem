import { PatientService } from './../Apis/patient.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.scss']
})
export class PatientLoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(private fb:FormBuilder,private Routes:Router,private Api:PatientService){

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      patientname:['',Validators.required],
      password:['',Validators.required]
    })
  }


  Login(){
    let PatientName = this.loginForm.get('patientname')?.value
    let Password = this.loginForm.get('password')?.value
    console.log(PatientName,"PN");
    console.log(Password,"P");
    

    this.Api.getPatient(PatientName,Password).subscribe((res:any)=>{
      console.log(res,"check");
      if(res){
        localStorage.setItem('patient', JSON.stringify(res))
        this.Routes.navigate(['/Patient-Home'])
      }else{
        alert("Wrong Credientials")
      }
    })
  }
}
