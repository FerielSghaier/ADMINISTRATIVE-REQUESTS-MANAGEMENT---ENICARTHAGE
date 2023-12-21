import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionAdminComponent } from './proposition-admin.component';

describe('PropositionAdminComponent', () => {
  let component: PropositionAdminComponent;
  let fixture: ComponentFixture<PropositionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
