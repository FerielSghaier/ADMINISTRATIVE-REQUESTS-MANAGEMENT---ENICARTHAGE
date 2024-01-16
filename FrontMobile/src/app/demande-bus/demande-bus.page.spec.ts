import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandeBusPage } from './demande-bus.page';

describe('DemandeBusPage', () => {
  let component: DemandeBusPage;
  let fixture: ComponentFixture<DemandeBusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemandeBusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
