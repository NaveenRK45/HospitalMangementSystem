import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private Routes:Router){}

  admin(){
    this.Routes.navigate(['/AdminLogin'])
  }
}
