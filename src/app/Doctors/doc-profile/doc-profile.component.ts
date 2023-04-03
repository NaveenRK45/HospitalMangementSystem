import { DoctorService } from './../Apis/doctor.service';
import { Router } from '@angular/router';
import { AdminService } from './../../Admin/Apis/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.scss']
})
export class DocProfileComponent implements OnInit{
  EditDoctor!:FormGroup
  dProfile:any

  constructor(private Routes:Router,
    private fb:FormBuilder,
    private Api:AdminService,
    private PApi:DoctorService
){

}

  ngOnInit(): void {
    let dName= JSON.parse(localStorage.getItem('doctor')!).username
    console.log(dName,"doc");

    this.EditDoctor = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      mobileno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10)]],
      emailid:['',[Validators.required,Validators.email]],
      specialization:['',[Validators.required]],
      consultationfee:['',[Validators.required]],
      address:['',[Validators.required]]
    });
    this.PApi.viewProfile(dName).subscribe((res:any)=>{
      this.dProfile = res;  
      console.log(this.dProfile,"dProfile");
      this.EditDoctor.patchValue({
        firstname:this.dProfile.firstname,
        lastname:this.dProfile.lastname,
        username:this.dProfile.username,
        password:this.dProfile.password,
        mobileno:this.dProfile.mobileno,
        emailid:this.dProfile.emailid,
        specialization:this.dProfile.specialization,
        consultationfee:this.dProfile.consultationfee,
        address:this.dProfile.address
      })
    });

    
  }
  Edit(){
    if(this.EditDoctor.valid){
      this.PApi.editDoctor(this.dProfile._id,this.EditDoctor.value).subscribe((res:any)=>{
        console.log(res,"check");
      alert("Updated Successfully")   
      })
    }
  }
}
