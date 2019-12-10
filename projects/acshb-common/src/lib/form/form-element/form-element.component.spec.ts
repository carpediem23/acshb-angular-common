import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementComponent } from './form-element.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormElementComponent', () => {
  let component: FormElementComponent;
  let fixture: ComponentFixture<FormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElementComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
