import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bg',
  templateUrl: './add-bg.component.html',
  styleUrls: ['./add-bg.component.scss']
})
export class AddBGComponent implements OnInit {
  BGform!:FormGroup

  constructor(private fb:FormBuilder,private Routes:Router,private Api:AdminService){}


  ngOnInit(): void {
    this.BGform = this.fb.group({
      bloodgroup:['',[Validators.required]],
      bloodpackets:['',[Validators.required]]
    })

  }
  Add(){
    const B ={
      bloodgroup : this.BGform.get('bloodgroup')?.value,
     bloodpackets : this.BGform.get('bloodpackets')?.value
  }
    if(this.BGform.valid){
    this.Api.AddBG(B).subscribe((res:any)=>{
      if(res){
        alert("Blood Group Added Successfully")
        this.Routes.navigate(['Admin-Home/bloodgroup/View-Bloodgrp'])
      }else{
        alert('BloodGroup not Added')
      }
    })
  }
  }
}
