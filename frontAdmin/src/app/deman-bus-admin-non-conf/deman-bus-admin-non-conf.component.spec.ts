import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanBusAdminNonConfComponent } from './deman-bus-admin-non-conf.component';

describe('DemanBusAdminNonConfComponent', () => {
  let component: DemanBusAdminNonConfComponent;
  let fixture: ComponentFixture<DemanBusAdminNonConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanBusAdminNonConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanBusAdminNonConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
