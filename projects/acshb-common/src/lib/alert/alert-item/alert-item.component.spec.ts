import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertItemComponent } from './alert-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ToastrComponent', () => {
  let component: AlertItemComponent;
  let fixture: ComponentFixture<AlertItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
