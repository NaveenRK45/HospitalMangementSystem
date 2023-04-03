import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit{
  AddDoctor! : FormGroup;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService){}


  ngOnInit(): void {
    this.AddDoctor =   this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username:['',[Validators.required]],
      mobileno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10)]],
      emailid:['',[Validators.required,Validators.email]],
      specialization:['',[Validators.required]],
      consultationfee:['',[Validators.required]],
      address:['',[Validators.required]]
    })
  }




  Add(){
    const D = {
      firstname:this.AddDoctor.get('firstname')?.value,
      lastname:this.AddDoctor.get('lastname')?.value,
      username:this.AddDoctor.get('username')?.value,
      mobileno:this.AddDoctor.get('mobileno')?.value,
      emailid:this.AddDoctor.get('emailid')?.value,
      specialization:this.AddDoctor.get('specialization')?.value,
      consultationfee:this.AddDoctor.get('consultationfee')?.value,
      address:this.AddDoctor.get('address')?.value,
      
    }
    this.Api.AddDoctor(D).subscribe((res:any)=>{
      console.log(res,"check");
      alert("Doctor Added Successfully")
      this.Routes.navigate(['/sidenav/Doctor/View-doctor'])
    })

  }
}
