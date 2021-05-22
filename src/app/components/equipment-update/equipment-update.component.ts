import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';
import { __awaiter } from 'tslib';

@Component({
  selector: 'app-equipment-update',
  templateUrl: './equipment-update.component.html',
  styleUrls: ['./equipment-update.component.css']
})
export class EquipmentUpdateComponent implements OnInit {

  equipment:Equipment;
  equipmentUpdateForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private equipmentService:EquipmentService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.setValues();
  }

  async setValues(){
    this.activatedRoute.params.subscribe(async (params) => {
      if (params['equipmentId']) {       
        await this.getEquipmentById(params['equipmentId']);
        this.createEquipmentUpdateForm();
      }
    });
  }

  createEquipmentUpdateForm(){
  this.equipmentUpdateForm=this.formBuilder.group({
    equipmentId:[{value:this.equipment.equipmentId,disabled:true}],
    equipmentName:[this.equipment.equipmentName,Validators.required],
    clinicId:[this.equipment.clinicId,Validators.required],
    procurementDate:[this.equipment.procurementDate,Validators.required],
    unitsInStock:[this.equipment.unitsInStock, Validators.required],
    unitPrice:[this.equipment.unitPrice,Validators.required],
    usageRate:[this.equipment.usageRate,Validators.required],

  })
  }

  update(){
    if(this.equipmentUpdateForm.valid){
      let equipmentModel:Equipment = Object.assign({},this.equipmentUpdateForm.getRawValue())  
      equipmentModel.equipmentId=Number(equipmentModel.equipmentId)   
      this.equipmentService.update(equipmentModel).subscribe(response=>{
        this.toastrService.success("Ürün güncellendi", "Başarılı");
      })
      
    }else{
      this.toastrService.error("Formunuz eksik","Uyarı");
    }
  }

  async getEquipmentById(equipmentId: number) {
   
    this.equipment =(await this.equipmentService.getEquipmentById(equipmentId).toPromise()).data[0]
    
  }

}
