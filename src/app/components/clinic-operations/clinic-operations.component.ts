import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-clinic-operations',
  templateUrl: './clinic-operations.component.html',
  styleUrls: ['./clinic-operations.component.css']
})
export class ClinicOperationsComponent implements OnInit {

  clinics:Clinic[]=[];
  
  constructor(private clinicService:ClinicService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getClinics();
  }

  getClinics(){
    this.clinicService.getClinics().subscribe(response=>{
      this.clinics=response.data;
    })
  }

  delete(clinic:Clinic){
    this.clinicService.delete(clinic).subscribe(response=>{
      this.toastrService.success("Ürün silindi.","Başarılı");
    })
    
  }

}
