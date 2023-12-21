import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMaterielRefComponent } from './demande-materiel-ref.component';

describe('DemandeMaterielRefComponent', () => {
  let component: DemandeMaterielRefComponent;
  let fixture: ComponentFixture<DemandeMaterielRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeMaterielRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeMaterielRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
