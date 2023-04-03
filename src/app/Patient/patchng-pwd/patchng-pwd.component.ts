import { Router } from '@angular/router';
import { PatientService } from './../Apis/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patchng-pwd',
  templateUrl: './patchng-pwd.component.html',
  styleUrls: ['./patchng-pwd.component.scss']
})
export class PatchngPwdComponent implements OnInit{
  changeForm!:FormGroup
  myProfile:any;

  constructor(private Routes:Router,private fb:FormBuilder,
    private PApi:PatientService
    ){}

  
  ngOnInit(): void {
    let pName= JSON.parse(localStorage.getItem('patient')!).patientname
    console.log(pName);

    this.changeForm = this.fb.group({
      patientname:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(3)]]
    });
    this.PApi.ViewProfile(pName).subscribe((res:any)=>{
      this.myProfile=res
      console.log(this.myProfile);
      this.changeForm.patchValue({
        patientname:this.myProfile.patientname
      })
     })
  }
  change(){
    let data={
      password:this.changeForm.get('password')?.value
    }
    this.PApi.ChngPwd(this.myProfile._id,data).subscribe((res:any)=>{
      console.log(res,"check");
      
    })
  }

}
