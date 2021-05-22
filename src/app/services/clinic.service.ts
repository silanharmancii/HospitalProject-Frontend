import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Clinic } from '../models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  apiUrl = 'https://localhost:44312/api/';

  constructor(private httpClient:HttpClient) { }

  
  getClinics():Observable<ListResponseModel<Clinic>>{
    let newPath= this.apiUrl + "clinics/getall";
    return this.httpClient.get<ListResponseModel<Clinic>>(newPath);
  }
  
  getClinicById(clinicId:number):Observable<ListResponseModel<Clinic>>{
    let newPath= this.apiUrl + "clinics/getclinicbyid?clinicId="+clinicId
    return this.httpClient.get<ListResponseModel<Clinic>>(newPath);
  }
  add(clinic:Clinic){
    let newPath= this.apiUrl + "clinics/add";
    return this.httpClient.post(newPath,clinic);
  }

  update(clinic:Clinic){
    
    return this.httpClient.post(this.apiUrl+"clinics/update",clinic);
  }

  delete(clinic:Clinic){
    
    return this.httpClient.post(this.apiUrl+"clinics/delete",clinic);
  }
}
