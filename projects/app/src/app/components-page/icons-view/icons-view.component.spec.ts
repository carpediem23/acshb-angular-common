import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsViewComponent } from './icons-view.component';

describe('IconsViewComponent', () => {
  let component: IconsViewComponent;
  let fixture: ComponentFixture<IconsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
