import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.scss']
})
export class EditDoctorComponent implements OnInit {
  EditDoctor!:FormGroup

  constructor(private Routes:Router,
    private Api:AdminService,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
public dialogRef:MatDialogRef<EditDoctorComponent>,
    ){}

  ngOnInit(): void {
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
    })
    this.EditDoctor.patchValue({
      firstname:this.data.firstname,
      lastname:this.data.lastname,
      username:this.data.username,
      mobileno:this.data.mobileno,
      emailid:this.data.emailid,
      specialization:this.data.specialization,
      consultationfee:this.data.consultationfee,
      address:this.data.address,
    })
  }
  Edit(){
    // if(this.EditDoctor.valid){
      const e ={
        firstname:this.EditDoctor.get('firstname')?.value,
        lastname:this.EditDoctor.get('lastname')?.value,
        username:this.EditDoctor.get('username')?.value,
        mobileno:this.EditDoctor.get('mobileno')?.value,
        emailid:this.EditDoctor.get('emailid')?.value,
        specialization:this.EditDoctor.get('specialization')?.value,
        consultationfee:this.EditDoctor.get('consultationfee')?.value,
        address:this.EditDoctor.get('address')?.value,
      }
      console.log(e,"Check e");
      
      this.Api.EditDoctor(this.data._id,e).subscribe((res:any)=>{
      console.log(res,"Check res");
        alert("Update Successfully");
        window.location.reload()
        this.dialogRef.close()
      },err=>{
        alert("ERROR")
      })
    }
  }
// }
