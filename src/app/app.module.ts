import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgpSortModule} from 'ngp-sort-pipe';
import { JwPaginationModule} from 'jw-angular-pagination';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { NaviComponent } from './components/navi/navi.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { EquipmentAddComponent } from './components/equipment-add/equipment-add.component';
import { EquipmentOperationComponent } from './components/equipment-operation/equipment-operation.component';
import { EquipmentUpdateComponent } from './components/equipment-update/equipment-update.component';
import { ClinicOperationsComponent } from './components/clinic-operations/clinic-operations.component';
import { ClinicAddComponent } from './components/clinic-add/clinic-add.component';
import { ClinicUpdateComponent } from './components/clinic-update/clinic-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicComponent,
    EquipmentComponent,
    NaviComponent,
    FilterPipePipe,
    EquipmentAddComponent,
    EquipmentOperationComponent,
    EquipmentUpdateComponent,
    ClinicOperationsComponent,
    ClinicAddComponent,
    ClinicUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgpSortModule,
    JwPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
