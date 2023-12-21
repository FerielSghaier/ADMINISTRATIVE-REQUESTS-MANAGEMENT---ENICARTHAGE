import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOrgComponent } from './message-org.component';

describe('MessageOrgComponent', () => {
  let component: MessageOrgComponent;
  let fixture: ComponentFixture<MessageOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
