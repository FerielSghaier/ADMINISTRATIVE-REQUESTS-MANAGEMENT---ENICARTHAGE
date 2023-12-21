import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOrgComponent } from './navbar-org.component';

describe('NavbarOrgComponent', () => {
  let component: NavbarOrgComponent;
  let fixture: ComponentFixture<NavbarOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
