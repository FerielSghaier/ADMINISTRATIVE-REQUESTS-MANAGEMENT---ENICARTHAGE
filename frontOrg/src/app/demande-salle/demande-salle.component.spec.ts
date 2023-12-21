import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSalleComponent } from './demande-salle.component';

describe('DemandeSalleComponent', () => {
  let component: DemandeSalleComponent;
  let fixture: ComponentFixture<DemandeSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
