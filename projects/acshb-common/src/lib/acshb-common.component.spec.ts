import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcshbCommonComponent } from './acshb-common.component';

describe('AcshbCommonComponent', () => {
  let component: AcshbCommonComponent;
  let fixture: ComponentFixture<AcshbCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcshbCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcshbCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
