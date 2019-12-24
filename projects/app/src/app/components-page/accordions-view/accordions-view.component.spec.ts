import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionsViewComponent } from './accordions-view.component';

describe('AccordionsViewComponent', () => {
  let component: AccordionsViewComponent;
  let fixture: ComponentFixture<AccordionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
