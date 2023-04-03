import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.scss']
})
export class AdminDoctorComponent {
  Doctor = true;
  disableAdd = false;
  diasbleView = true;

  constructor(private Routes:Router){}

  ViewDoctor(){
    this.diasbleView = true;
    this.disableAdd = false;
    this.Routes.navigate(['/Admin-Home/Doctor/View-doctor'])
  }
  AddDoctor(){
    this.diasbleView = false;
    this.disableAdd = true;
    this.Routes.navigate(['/Admin-Home/Doctor/Add-doctor'])
  }
}
