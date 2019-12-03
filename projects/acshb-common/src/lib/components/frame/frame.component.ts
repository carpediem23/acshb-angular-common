import { Component, OnInit, Input } from '@angular/core';
import { IconTypes } from '../../enums/icon-types.enum';

@Component({
  selector: 'acshb-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  private iconTypes = IconTypes;
  public toggle = false;

  constructor() { }

  ngOnInit() { }

  onToggleClick(e) {
    e.preventDefault();
    this.toggle = !this.toggle;
  }
}
