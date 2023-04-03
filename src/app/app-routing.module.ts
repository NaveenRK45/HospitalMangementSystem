import { PatProfileComponent } from './Patient/pat-profile/pat-profile.component';
import { PatchngPwdComponent } from './Patient/patchng-pwd/patchng-pwd.component';
import { PatSidenavComponent } from './Patient/pat-sidenav/pat-sidenav.component';
import { DocChgPwdComponent } from './Doctors/doc-chg-pwd/doc-chg-pwd.component';
import { ViewPatientComponent } from './Doctors/view-patient/view-patient.component';
import { DocProfileComponent } from './Doctors/doc-profile/doc-profile.component';
import { AddBGComponent } from './Admin/Blood-Group/add-bg/add-bg.component';
import { ViewBGComponent } from './Admin/Blood-Group/view-bg/view-bg.component';
import { ChangePasswordComponent } from './Admin/change-password/change-password.component';
import { AdminBloodgrpComponent } from './Admin/admin-bloodgrp/admin-bloodgrp.component';
import { AdminOperationComponent } from './Admin/admin-operation/admin-operation.component';
import { ViewOperationComponent } from './Admin/Operations/view-operation/view-operation.component';
import { AddOperationComponent } from './Admin/Operations/add-operation/add-operation.component';
import { ViewPatientsComponent } from './Admin/patients/view-patients/view-patients.component';
import { AdminDoctorComponent } from './Admin/admin-doctor/admin-doctor.component';
import { DocSidenavComponent } from './Doctors/doc-sidenav/doc-sidenav.component';
import { DoctorLoginComponent } from './Doctors/doctor-login/doctor-login.component';
import { SidenavComponent } from './Admin/sidenav/sidenav.component';
import { PatientRegComponent } from './Patient/patient-reg/patient-reg.component';
import { PatientLoginComponent } from './Patient/patient-login/patient-login.component';
import { EditDoctorComponent } from './Admin/Doctor/edit-doctor/edit-doctor.component';
import { DeleteDoctorComponent } from './Admin/Doctor/delete-doctor/delete-doctor.component';
import { ViewDoctorComponent } from './Admin/Doctor/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './Admin/Doctor/add-doctor/add-doctor.component';
import { HomeComponent } from './Home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

const routes: Routes = [

  {path:'',redirectTo:'Homepage',pathMatch:'full'},
  {path:'Homepage',component:HomeComponent,children:[
     {path:'Adminlogin',component:AdminLoginComponent},
      {path:'Patientlogin',component:PatientLoginComponent},
      {path:'PatientReg',component:PatientRegComponent},
      {path:'Doctorlogin',component:DoctorLoginComponent}
   ]},

  {path:'Admin-Home',component:SidenavComponent,children:[
      {path:'',redirectTo:'sidenav',pathMatch:'full'},
      {path:'Doctor',component:AdminDoctorComponent,children:[
          {path:'',redirectTo:'View-doctor',pathMatch:'full'},
          {path:'View-doctor',component:ViewDoctorComponent},
          {path:'Add-doctor',component:AddDoctorComponent}
      ]},
      {path:'view-patient',component:ViewPatientsComponent},
      {path:'bloodgroup',component:AdminBloodgrpComponent,children:[
        {path:'',redirectTo:'View-Bloodgrp',pathMatch:'full'},
        {path:'View-Bloodgrp',component:ViewBGComponent},
        {path:'Add-Bloodgrp',component:AddBGComponent}
      ]},
      {path:'operation',component:AdminOperationComponent,children:[
        {path:'',redirectTo:'view-operation',pathMatch:'full'},
        {path:'add-operation',component:AddOperationComponent},
        {path:'view-operation',component:ViewOperationComponent}
      ]},
      {path:'changepassword',component:ChangePasswordComponent}

      ]},
  {path:'Doctor-Home',component:DocSidenavComponent,children:[
    {path:'',redirectTo:'Doctor-Home',pathMatch:'full'},
    {path:'Profile',component:DocProfileComponent},
    {path:'view-operation',component:ViewOperationComponent},
    {path:'View-Bloodgrp',component:ViewBGComponent},
    {path:'view-patient',component:ViewPatientComponent},
    {path:'docchgPwd',component:DocChgPwdComponent}
  ]},
  {path:'Patient-Home',component:PatSidenavComponent,children:[
    {path:'',redirectTo:'Patient-Home',pathMatch:'full'},
    {path:'view-operation',component:ViewOperationComponent},
    {path:'View-Bloodgrp',component:ViewBGComponent},
    {path:'ChangePwd',component:PatchngPwdComponent},
    {path:'Pat-Profile',component:PatProfileComponent}
    
  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
