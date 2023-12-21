import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMaterielComponent } from './demande-materiel.component';

describe('DemandeMaterielComponent', () => {
  let component: DemandeMaterielComponent;
  let fixture: ComponentFixture<DemandeMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
