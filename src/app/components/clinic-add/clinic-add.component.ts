import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-add',
  templateUrl: './clinic-add.component.html',
  styleUrls: ['./clinic-add.component.css']
})
export class ClinicAddComponent implements OnInit {

  clinicAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private clinicService:ClinicService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createEquipmentAddForm();
  }

  createEquipmentAddForm(){
    this.clinicAddForm=this.formBuilder.group({
      clinicName:["",Validators.required]
    })
  }

  add(){
    if(this.clinicAddForm.valid){
      let clinicModel= Object.assign({},this.clinicAddForm.value)
      this.clinicService.add(clinicModel) .subscribe(response=>{
        this.toastrService.success("Klinik eklendi.","Başarılı");
      })      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }

}
