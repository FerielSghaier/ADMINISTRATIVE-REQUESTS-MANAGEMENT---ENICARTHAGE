import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanMatAdminNonConfComponent } from './deman-mat-admin-non-conf.component';

describe('DemanMatAdminNonConfComponent', () => {
  let component: DemanMatAdminNonConfComponent;
  let fixture: ComponentFixture<DemanMatAdminNonConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemanMatAdminNonConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemanMatAdminNonConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
