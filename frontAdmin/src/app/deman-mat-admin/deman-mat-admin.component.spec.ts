import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanMatAdminComponent } from './deman-mat-admin.component';

describe('DemanMatAdminComponent', () => {
  let component: DemanMatAdminComponent;
  let fixture: ComponentFixture<DemanMatAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanMatAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanMatAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
