
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material-modules';

import { AddDoctorComponent } from './Admin/Doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './Admin/Doctor/edit-doctor/edit-doctor.component';
import { ViewDoctorComponent } from './Admin/Doctor/view-doctor/view-doctor.component';
import { DeleteDoctorComponent } from './Admin/Doctor/delete-doctor/delete-doctor.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ChangePasswordComponent } from './Admin/change-password/change-password.component';
import { AddOperationComponent } from './Admin/Operations/add-operation/add-operation.component';
import { ViewOperationComponent } from './Admin/Operations/view-operation/view-operation.component';
import { AddBGComponent } from './Admin/Blood-Group/add-bg/add-bg.component';
import { ViewBGComponent } from './Admin/Blood-Group/view-bg/view-bg.component';
import { ViewPatientsComponent } from './Admin/patients/view-patients/view-patients.component';
import { HomeComponent } from './Home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ViewDoctorComponent,
    DeleteDoctorComponent,
    ChangePasswordComponent,
    AddOperationComponent,
    ViewOperationComponent,
    AddBGComponent,
    ViewBGComponent,
    ViewPatientsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
