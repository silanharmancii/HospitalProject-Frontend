import { Component, OnInit } from '@angular/core';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  clinics: Clinic[]=[];
  currentClinic:Clinic;

  constructor(private clinicService:ClinicService) { }

  ngOnInit(): void {
    this.getClinics();
  }

  getClinics(){
    this.clinicService.getClinics().subscribe(response=>{
      this.clinics=response.data;
    })
  }

  setCurrentClinic(clinic:Clinic){
    this.currentClinic = clinic;
  }

  getCurrentClinicClass(clinic:Clinic){
    if(clinic==this.currentClinic){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllClinicClass(){
    if(!this.currentClinic){
     return "list-group-item active"
    }
    else{
     return "list-group-item"
    }
  } 
}
