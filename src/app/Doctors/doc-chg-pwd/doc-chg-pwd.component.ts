import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Apis/doctor.service';

@Component({
  selector: 'app-doc-chg-pwd',
  templateUrl: './doc-chg-pwd.component.html',
  styleUrls: ['./doc-chg-pwd.component.scss']
})
export class DocChgPwdComponent implements OnInit{
  changeForm:any;
  dProfile:any;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:DoctorService){}


  ngOnInit(): void {
    let dName= JSON.parse(localStorage.getItem('doctor')!).username

    this.changeForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(3)]]
    });
    this.Api.viewProfile(dName).subscribe((res:any)=>{
      this.dProfile = res;  
      console.log(this.dProfile,"dProfile");
      this.changeForm.patchValue({
        username:this.dProfile.username
      })
    });
  }
  change(){
    this.Api.changePwd(this.dProfile._id,this.changeForm.value).subscribe((res:any)=>{
      console.log(res,"check");
      alert('Password was Updated Successfully')
    })
  }
}
