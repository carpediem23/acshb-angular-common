import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramesViewComponent } from './frames-view.component';

describe('FrameViewComponent', () => {
  let component: FramesViewComponent;
  let fixture: ComponentFixture<FramesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
