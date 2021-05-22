import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentOperationComponent } from './equipment-operation.component';

describe('EquipmentOperationComponent', () => {
  let component: EquipmentOperationComponent;
  let fixture: ComponentFixture<EquipmentOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
