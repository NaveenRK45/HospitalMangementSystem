import { DoctorService } from './../Apis/doctor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  AddMedicine!:FormGroup;

  constructor(
    private Api:DoctorService,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
public dialogRef:MatDialogRef<AddMedicineComponent>,
    ){}

  ngOnInit(): void {
    this.AddMedicine =this.fb.group({
      patientname:['',[Validators.required]],
      mobileno:['',[Validators.required]],
      problem:['',[Validators.required]],
      medicine:['',[Validators.required]],
    });
    this.AddMedicine.patchValue({
      patientname:this.data.patientname,
      mobileno:this.data.mobileno,
      problem:this.data.problem,
      medicine:this.data.medicine,
    })
    console.log(this.data,"Data");
    
  }
  Add(){
    if(this.AddMedicine.valid){
      const M ={
        patientname:this.AddMedicine.get('patientname')?.value,
        mobileno:this.AddMedicine.get('mobileno')?.value,
        problem:this.AddMedicine.get('problem')?.value,
        medicine:this.AddMedicine.get('medicine')?.value,
      }
      console.log(M,"values");
      
      this.Api.updateMedi(this.data._id,M).subscribe((res:any)=>{
        console.log(res,"Check res");
          alert("Update Successfully");
          window.location.reload()
          this.dialogRef.close()
        },err=>{
          alert("ERROR")
        })
    }
  }

}
