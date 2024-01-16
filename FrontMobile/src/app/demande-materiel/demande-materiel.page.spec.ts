import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandeMaterielPage } from './demande-materiel.page';

describe('DemandeMaterielPage', () => {
  let component: DemandeMaterielPage;
  let fixture: ComponentFixture<DemandeMaterielPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemandeMaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
