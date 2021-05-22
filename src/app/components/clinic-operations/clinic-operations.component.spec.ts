import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicOperationsComponent } from './clinic-operations.component';

describe('ClinicOperationsComponent', () => {
  let component: ClinicOperationsComponent;
  let fixture: ComponentFixture<ClinicOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
