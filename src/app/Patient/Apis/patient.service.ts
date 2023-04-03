import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  
  getPatient(patientname:any,password:any){
    return this.http.get('http://localhost:1122/patient/patientLogin?patientname='+ patientname +'&password=' +password)
  }
  AddPatient(data:any){
    return this.http.post('http://localhost:1122/patient/registration',data)
  }
  EditPatient(id:any,data:any){
    return this.http.put('http://localhost:1122/patient/updateprofile/' + id,data)
  }
  ViewProfile(patientname:any){
    return this.http.get('http://localhost:1122/patient/viewprofile?patientname=' + patientname)
  }
  ChngPwd(id:any,data:any){
    return this.http.put('http://localhost:1122/patient/updatepassword/' + id,data)
  }
}
