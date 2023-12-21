import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationAdminComponent } from './reclamation-admin.component';

describe('ReclamationAdminComponent', () => {
  let component: ReclamationAdminComponent;
  let fixture: ComponentFixture<ReclamationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
