import { AdminService } from './../Apis/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  adminloginForm!:FormGroup;
   admin:any;

   constructor(private _myhead:FormBuilder,private Routes:Router,private Adminapi:AdminService){}
  ngOnInit() {
    this.adminloginForm = this._myhead.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }

  Login(){
    let UserName = this.adminloginForm.get('username')?.value
    let Password = this.adminloginForm.get('password')?.value

    this.Adminapi.getAdmin(UserName,Password).subscribe((res:any)=>{
      this.admin = res;
      console.log("check",this.admin);
      if(this.admin){
        localStorage.setItem('admin', JSON.stringify(res))
        this.Routes.navigate(['/Admin-Home'])
      }else{
        alert('Wrong Credentials')
      }
    })

  }
}
