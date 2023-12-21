import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeBusRefComponent } from './demande-bus-ref.component';

describe('DemandeBusRefComponent', () => {
  let component: DemandeBusRefComponent;
  let fixture: ComponentFixture<DemandeBusRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeBusRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeBusRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
