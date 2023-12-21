import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsConfirComponent } from './orgs-confir.component';

describe('OrgsConfirComponent', () => {
  let component: OrgsConfirComponent;
  let fixture: ComponentFixture<OrgsConfirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgsConfirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgsConfirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
