import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css']
})
export class EquipmentAddComponent implements OnInit {

  equipmentAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private equipmentService:EquipmentService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createEquipmentAddForm();
  }

  createEquipmentAddForm(){
    this.equipmentAddForm=this.formBuilder.group({
      equipmentName:["",Validators.required],
      clinicId:["",Validators.required],
      unitsInStock:["",Validators.required],
      unitPrice:["",Validators.required],
      procurementDate:[],
      usageRate:["",Validators.required]
    })
  }

  add(){
    if(this.equipmentAddForm.valid){
      let equipmentModel= Object.assign({},this.equipmentAddForm.value)
      this.equipmentService.add(equipmentModel) .subscribe(response=>{
        this.toastrService.success("Ürün eklendi.","Başarılı");
      })      
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat");
    }
  }

}
