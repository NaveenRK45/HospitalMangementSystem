
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
import { HttpClientModule } from '@angular/common/http';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { PatientRegComponent } from './Patient/patient-reg/patient-reg.component';
import { SidenavComponent } from './Admin/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DoctorLoginComponent } from './Doctors/doctor-login/doctor-login.component';
import { DocSidenavComponent } from './Doctors/doc-sidenav/doc-sidenav.component';
import { AdminDoctorComponent } from './Admin/admin-doctor/admin-doctor.component';
import { AdminOperationComponent } from './Admin/admin-operation/admin-operation.component';
import { AdminBloodgrpComponent } from './Admin/admin-bloodgrp/admin-bloodgrp.component';
import { DocProfileComponent } from './Doctors/doc-profile/doc-profile.component';
import { ViewPatientComponent } from './Doctors/view-patient/view-patient.component';
import { AddMedicineComponent } from './Doctors/add-medicine/add-medicine.component';
import { DocChgPwdComponent } from './Doctors/doc-chg-pwd/doc-chg-pwd.component';
import { PatSidenavComponent } from './Patient/pat-sidenav/pat-sidenav.component';
import { PatchngPwdComponent } from './Patient/patchng-pwd/patchng-pwd.component';
import { PatProfileComponent } from './Patient/pat-profile/pat-profile.component';

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
    HomeComponent,
    PatientLoginComponent,
    PatientRegComponent,
    SidenavComponent,
    DoctorLoginComponent,
    DocSidenavComponent,
    AdminDoctorComponent,
    AdminOperationComponent,
    AdminBloodgrpComponent,
    DocProfileComponent,
    ViewPatientComponent,
    AddMedicineComponent,
    DocChgPwdComponent,
    PatSidenavComponent,
    PatchngPwdComponent,
    PatProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
