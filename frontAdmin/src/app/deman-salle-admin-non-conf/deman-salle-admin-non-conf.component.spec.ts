import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanSalleAdminNonConfComponent } from './deman-salle-admin-non-conf.component';

describe('DemanSalleAdminNonConfComponent', () => {
  let component: DemanSalleAdminNonConfComponent;
  let fixture: ComponentFixture<DemanSalleAdminNonConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanSalleAdminNonConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanSalleAdminNonConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
