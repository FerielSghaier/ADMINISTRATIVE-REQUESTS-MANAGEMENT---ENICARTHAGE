import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrgComponent } from './menu-org.component';

describe('MenuOrgComponent', () => {
  let component: MenuOrgComponent;
  let fixture: ComponentFixture<MenuOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
