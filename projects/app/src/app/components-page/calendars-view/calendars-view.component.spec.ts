import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsViewComponent } from './calendars-view.component';

describe('CalendarViewComponent', () => {
  let component: CalendarsViewComponent;
  let fixture: ComponentFixture<CalendarsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
