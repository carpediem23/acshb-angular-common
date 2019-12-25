import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesViewComponent } from './datatables-view.component';

describe('DatatablesViewComponent', () => {
  let component: DatatablesViewComponent;
  let fixture: ComponentFixture<DatatablesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
