import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAdmin(username:any,password:any){
    return this.http.get('http://localhost:1122/admin/adminlogin?username='+ username+'&password='+ password)
  }
  AddDoctor(data:any){
    return this.http.post('http://localhost:1122/doctor/adddoctors',data)
  }
  ViewDoctor(){
    return this.http.get('http://localhost:1122/admin/viewdoctors')
  }
  EditDoctor(id:any,data:any){
    return this.http.put('http://localhost:1122/admin/doctorupdate/' + id,data)
  }
  DeleteDoctor(id:any){
    return this.http.delete('http://localhost:1122/admin/doctorremove/'+id)
  }
  ViewPatient(){
    return this.http.get('http://localhost:1122/admin/viewpatients')
  }

  //blood group
  AddBG(data:any){
    return this.http.post('http://localhost:1122/admin/addblood',data)
  }
  ViewBG(){
    return this.http.get('http://localhost:1122/admin/viewbloodbank')
  }

  // Operation
  AddOp(data:any){
    return this.http.post('http://localhost:1122/admin/operation',data)
  }
  ViewOp(){
    return this.http.get('http://localhost:1122/admin/viewoperationfee')
  }

  ChangePwd(id:any,data:any){
    return this.http.put('http://localhost:1122/admin/updatepassword/' +id ,data)
  }


}
