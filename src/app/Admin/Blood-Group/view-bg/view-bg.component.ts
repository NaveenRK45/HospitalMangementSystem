import { Router } from '@angular/router';
import { AdminService } from './../../Apis/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bg',
  templateUrl: './view-bg.component.html',
  styleUrls: ['./view-bg.component.scss']
})
export class ViewBGComponent implements OnInit {

  ViewBlood:any;

  constructor(private Api:AdminService,private Routes:Router){}

  ngOnInit(): void {
    this.Api.ViewBG().subscribe((res:any)=>{
      console.log(res,"check");
      this.ViewBlood = res
    })
  }

}
