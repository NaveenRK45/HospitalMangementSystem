import { DoctorService } from './../Apis/doctor.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.scss']
})
export class DoctorLoginComponent implements OnInit {

  DoctorLoginForm!:FormGroup
  constructor(private fb:FormBuilder,private Routes:Router,private Api:DoctorService){

  }

  ngOnInit() {
    this.DoctorLoginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  

  Login(){
    let UserName = this.DoctorLoginForm.get('username')?.value
    let Password = this.DoctorLoginForm.get('password')?.value

    this.Api.getDoctor(UserName,Password).subscribe((res:any)=>{
      console.log(res,"check");
      if(res){
        localStorage.setItem('doctor', JSON.stringify(res))
        this.Routes.navigate(['/Doctor-Home'])
      }else{
        alert("Wrong Credentials")
      }
    })
  }
}
