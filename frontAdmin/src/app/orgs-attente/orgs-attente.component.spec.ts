import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsAttenteComponent } from './orgs-attente.component';

describe('OrgsAttenteComponent', () => {
  let component: OrgsAttenteComponent;
  let fixture: ComponentFixture<OrgsAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgsAttenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgsAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
