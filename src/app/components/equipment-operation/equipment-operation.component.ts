import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-equipment-operation',
  templateUrl: './equipment-operation.component.html',
  styleUrls: ['./equipment-operation.component.css']
})
export class EquipmentOperationComponent implements OnInit {

  equipments:Equipment[]=[];
  
  constructor(private equipmentService:EquipmentService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getEquipments();
  }

  getEquipments(){
    this.equipmentService.getEquipments().subscribe(response=>{
      this.equipments=response.data;
    })
  }

  delete(equipment:Equipment){
    this.equipmentService.delete(equipment).subscribe(response=>{
      this.toastrService.success("Ürün silindi.","Başarılı");
    })
    
  }
}
