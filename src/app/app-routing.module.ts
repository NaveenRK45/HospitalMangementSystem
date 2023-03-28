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
    {path:'',redirectTo:'Homepage',pathMatch:'full'},
    {path:'AdminLogin',component:AdminLoginComponent,children:[
      {path:'Add-doctor',component:AddDoctorComponent},
      {path:'View-doctor',component:ViewDoctorComponent},
      {path:'Edit-doctor',component:EditDoctorComponent},
      {path:'Delete-doctor',component:DeleteDoctorComponent},
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
