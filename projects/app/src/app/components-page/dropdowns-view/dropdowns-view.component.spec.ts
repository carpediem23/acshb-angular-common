import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsViewComponent } from './dropdowns-view.component';

describe('DropdownsViewComponent', () => {
  let component: DropdownsViewComponent;
  let fixture: ComponentFixture<DropdownsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
