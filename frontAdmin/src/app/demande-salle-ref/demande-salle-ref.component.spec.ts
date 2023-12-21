import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSalleRefComponent } from './demande-salle-ref.component';

describe('DemandeSalleRefComponent', () => {
  let component: DemandeSalleRefComponent;
  let fixture: ComponentFixture<DemandeSalleRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeSalleRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeSalleRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
