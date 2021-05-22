import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicAddComponent } from './components/clinic-add/clinic-add.component';
import { ClinicOperationsComponent } from './components/clinic-operations/clinic-operations.component';
import { ClinicUpdateComponent } from './components/clinic-update/clinic-update.component';
import { EquipmentAddComponent } from './components/equipment-add/equipment-add.component';
import { EquipmentOperationComponent } from './components/equipment-operation/equipment-operation.component';
import { EquipmentUpdateComponent } from './components/equipment-update/equipment-update.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:EquipmentComponent},
  {path:"equipments", component:EquipmentComponent},
  {path:"equipments/clinic/:clinicId", component:EquipmentComponent},
  {path:"equipments/clinic/:clinicId", component:EquipmentComponent},
  {path:"equipments/operations", component:EquipmentOperationComponent},
  {path:"equipments/operations/add", component:EquipmentAddComponent},
  {path:"equipments/operations/update/:equipmentId", component:EquipmentUpdateComponent},
  {path:"clinics/operations", component:ClinicOperationsComponent},
  {path:"clinics/operations/add", component:ClinicAddComponent},
  {path:"clinics/operations/update/:equipmentId", component:ClinicUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
