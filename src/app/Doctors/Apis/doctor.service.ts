import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getDoctor(username:any,password:any){
    return this.http.get('http://localhost:1122/doctor/doctorlogin?username='+ username+'&password='+ password)
  }
  ViewPatient(){
    return this.http.get('http://localhost:1122/doctor/viewpatients?username=')
  }
  updateMedi(id:any,data:any){
    return this.http.put('http://localhost:1122/doctor/medicineupdate/'+ id,data)
  }
  changePwd(id:any,data:any){
    return this.http.put('http://localhost:1122/doctor/updatepassword/' + id,data)
  }
  viewProfile(username:any){
    return this.http.get('http://localhost:1122/doctor/viewprofile?username=' + username)
  }
  editDoctor(id:any,data:any){
    return this.http.put('http://localhost:1122/doctor/updateprofile/' + id, data)
  }
}
