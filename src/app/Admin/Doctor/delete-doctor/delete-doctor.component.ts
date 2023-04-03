import { AdminService } from './../../Apis/admin.service';
import { Router } from '@angular/router';
import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private Api:AdminService,private route:Router){
    console.log(data);
    
  }

  deleteDoc(){
      this.Api.DeleteDoctor(this.data._id).subscribe((res:any)=>{
        window.location.reload() 
      })
  }
}
