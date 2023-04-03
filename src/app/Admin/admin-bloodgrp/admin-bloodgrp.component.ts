import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-bloodgrp',
  templateUrl: './admin-bloodgrp.component.html',
  styleUrls: ['./admin-bloodgrp.component.scss']
})
export class AdminBloodgrpComponent {

  Blood = true;
  disableAdd = false;
  diasbleView = true;

  constructor(private Routes:Router){}

  ViewBlood(){
    this.diasbleView = true;
    this.disableAdd = false;
    this.Routes.navigate(['/Admin-Home/bloodgroup/View-Bloodgrp'])
  }
  AddBlood(){
    this.diasbleView = false;
    this.disableAdd = true;
    this.Routes.navigate(['/Admin-Home/bloodgroup/Add-Bloodgrp'])
  }
}
