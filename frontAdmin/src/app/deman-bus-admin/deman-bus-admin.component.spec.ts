import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanBusAdminComponent } from './deman-bus-admin.component';

describe('DemanBusAdminComponent', () => {
  let component: DemanBusAdminComponent;
  let fixture: ComponentFixture<DemanBusAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanBusAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanBusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
