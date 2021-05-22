import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-update',
  templateUrl: './clinic-update.component.html',
  styleUrls: ['./clinic-update.component.css']
})
export class ClinicUpdateComponent implements OnInit {

  clinic:Clinic;
  clinicUpdateForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private clinicService:ClinicService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.setValues();
  }

  async setValues(){
    this.activatedRoute.params.subscribe(async (params) => {
      if (params['clinicId']) {       
        await this.getClinicById(params['clinicId']);
        this.createClinicUpdateForm();
      }
    });
  }

  createClinicUpdateForm(){
  this.clinicUpdateForm=this.formBuilder.group({
    clinicId:[{value:this.clinic.clinicId,disabled:true}],
    clinicName:[this.clinic.clinicName,Validators.required]

  })
  }

  update(){
    if(this.clinicUpdateForm.valid){
      let clinicModel:Clinic = Object.assign({},this.clinicUpdateForm.getRawValue())  
      clinicModel.clinicId=Number(clinicModel.clinicId)   
      this.clinicService.update(clinicModel).subscribe(response=>{
        this.toastrService.success("Ürün güncellendi", "Başarılı");
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Uyarı");
    }
  }

  async getClinicById(clinicId: number) {
   
    this.clinic =(await this.clinicService.getClinicById(clinicId).toPromise()).data[0]
    
  }

}
