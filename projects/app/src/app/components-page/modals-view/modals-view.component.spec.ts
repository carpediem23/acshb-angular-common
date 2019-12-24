import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsViewComponent } from './modals-view.component';

describe('ModalsViewComponent', () => {
  let component: ModalsViewComponent;
  let fixture: ComponentFixture<ModalsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
