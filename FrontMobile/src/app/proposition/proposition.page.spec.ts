import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropositionPage } from './proposition.page';

describe('PropositionPage', () => {
  let component: PropositionPage;
  let fixture: ComponentFixture<PropositionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PropositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
