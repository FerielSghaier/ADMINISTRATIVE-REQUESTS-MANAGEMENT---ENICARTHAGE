import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifOrgComponent } from './modif-org.component';

describe('ModifOrgComponent', () => {
  let component: ModifOrgComponent;
  let fixture: ComponentFixture<ModifOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
