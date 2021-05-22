import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';


@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: Equipment[]=[];
  dataLoaded=false;
  filterText="";
 

  constructor(private equipmentService:EquipmentService,
    private avtivatedRoute:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.avtivatedRoute.params.subscribe(params=>{
      if(params["clinicId"]){
        this.getEquipmentsByClinicId(params["clinicId"]);
      }else{
        this.getEquipments();
      }
    })
 
  }

  getEquipments(){
    this.equipmentService.getEquipments().subscribe(response=>{
      this.equipments=response.data;
      this.dataLoaded=true;
    })
  }

  getEquipmentsByClinicId(clinicId:number){
    this.equipmentService.getEquipmentsByClinicId(clinicId).subscribe(response=>{
      this.equipments=response.data;
      this.dataLoaded=true;
    })
  }
}


