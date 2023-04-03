import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from './../Apis/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changeForm:any;
  dName:any;

  constructor(private Routes:Router,private fb:FormBuilder,private Api:AdminService){}

  ngOnInit(): void {

     this.dName= JSON.parse(localStorage.getItem('admin')!)

    this.changeForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]],
      newpassword:['',[Validators.required,Validators.minLength(3),Validators.maxLength(8)]]
    });
    this.changeForm.patchValue({
      username: this.dName.username
    })
  }

  change(){
    let Password = this.changeForm.get('password')?.value
    let nPwd = this.changeForm.get('newpassword')?.value

    console.log(Password,nPwd,"check values");
    
console.log(this.dName.password, Password);
    if(this.dName.password == Password){
      let newData = {
        username:this.dName.username,
        password:nPwd,

      }
         this.Api.ChangePwd(this.dName._id,newData).subscribe((res:any)=>{
         console.log(res,"check");
         alert('Password was Updated Successfully')
       })
    }else{
      alert('Password & new Password not matched')
    }
  }

}
