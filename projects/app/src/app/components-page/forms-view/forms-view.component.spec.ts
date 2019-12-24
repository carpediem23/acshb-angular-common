import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsViewComponent } from './forms-view.component';

describe('FormsViewComponent', () => {
  let component: FormsViewComponent;
  let fixture: ComponentFixture<FormsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
