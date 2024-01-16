import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReclamationPage } from './reclamation.page';

describe('ReclamationPage', () => {
  let component: ReclamationPage;
  let fixture: ComponentFixture<ReclamationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
