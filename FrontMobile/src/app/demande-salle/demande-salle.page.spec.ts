import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandeSallePage } from './demande-salle.page';

describe('DemandeSallePage', () => {
  let component: DemandeSallePage;
  let fixture: ComponentFixture<DemandeSallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemandeSallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
