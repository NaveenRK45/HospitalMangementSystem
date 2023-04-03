import { AdminService } from './../../Apis/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-operation',
  templateUrl: './view-operation.component.html',
  styleUrls: ['./view-operation.component.scss']
})
export class ViewOperationComponent implements OnInit{
  ViewOperation:any;

  constructor(private Api:AdminService){}
  ngOnInit(): void {
    this.Api.ViewOp().subscribe((res:any)=>{
      console.log(res,"check");
      this.ViewOperation = res;
    })
  }
}
