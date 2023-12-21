import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeBusComponent } from './demande-bus.component';

describe('DemandeBusComponent', () => {
  let component: DemandeBusComponent;
  let fixture: ComponentFixture<DemandeBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
