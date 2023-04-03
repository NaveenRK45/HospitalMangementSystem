import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.scss']
})
export class AddOperationComponent implements OnInit{
  addOPform! : FormGroup
  doctors:any;

  constructor(private Routes:Router,private Api:AdminService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.addOPform = this.fb.group({
      doctorname:['',[Validators.required]],
      operationname:['',[Validators.required]],
      cost:['',[Validators.required]]
    });
    this.Api.ViewDoctor().subscribe((res:any)=>{
      console.log(res,"check");
      this.doctors = res
    })
  }

  Add(){
    if(this.addOPform.valid){
      const O ={
        doctorname :this.addOPform.get('doctorname')?.value,
        operationname :this.addOPform.get('operationname')?.value,
        cost :this.addOPform.get('cost')?.value,
      }
      this.Api.AddOp(O).subscribe((res:any)=>{
        console.log(res,"check");  
      })
      alert("Details Added Successfully")
      this.Routes.navigate(['Admin-Home/operation/view-operation'])
  
    }else{
      alert("ERROR")
    }
    }
  }

