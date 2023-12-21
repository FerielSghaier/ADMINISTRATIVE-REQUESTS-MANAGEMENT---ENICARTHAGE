import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanSalleAdminComponent } from './deman-salle-admin.component';

describe('DemanSalleAdminComponent', () => {
  let component: DemanSalleAdminComponent;
  let fixture: ComponentFixture<DemanSalleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanSalleAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanSalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
