import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcceuilPage } from './acceuil.page';

describe('AcceuilPage', () => {
  let component: AcceuilPage;
  let fixture: ComponentFixture<AcceuilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcceuilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
