import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-operation',
  templateUrl: './admin-operation.component.html',
  styleUrls: ['./admin-operation.component.scss']
})
export class AdminOperationComponent implements OnInit {
  Operation:any;
  disableAdd = false;
  diasbleView = true;

  constructor(private Routes:Router){}
  ngOnInit(): void {

  }
  ViewOperation(){
    this.diasbleView = true;
    this.disableAdd = false;
    this.Routes.navigate(['/Admin-Home/operation/view-operation'])
  }
  AddOperation(){
    this.diasbleView = false;
    this.disableAdd = true;
    this.Routes.navigate(['/Admin-Home/operation/add-operation'])
  }
}
