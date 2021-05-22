import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  apiUrl = 'https://localhost:44312/api/';

  constructor(private httpClient:HttpClient) { }

  getEquipments():Observable<ListResponseModel<Equipment>>{
    let newPath= this.apiUrl + "equipments/getall"
    return this.httpClient.get<ListResponseModel<Equipment>>(newPath);
  }
  getEquipmentsByClinicId(clinicId:number):Observable<ListResponseModel<Equipment>>{
    let newPath= this.apiUrl + "equipments/getequipmentsbyclinicid?clinicId="+clinicId
    return this.httpClient.get<ListResponseModel<Equipment>>(newPath);
  }
  getEquipmentById(equipmentId:number):Observable<ListResponseModel<Equipment>>{
    let newPath= this.apiUrl + "equipments/getequipmentbyid?equipmentId="+equipmentId
    return this.httpClient.get<ListResponseModel<Equipment>>(newPath);
  }

  add(equipment:Equipment){
    let newPath= this.apiUrl + "equipments/add";
    return this.httpClient.post(newPath,equipment);
  }

  update(equipment:Equipment){
    
    return this.httpClient.post(this.apiUrl+"equipments/update",equipment);
  }

  delete(equipment:Equipment){
    
    return this.httpClient.post(this.apiUrl+"equipments/delete",equipment);
  }
}
