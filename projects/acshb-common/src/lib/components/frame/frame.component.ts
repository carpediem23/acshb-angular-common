import { Component, Input } from '@angular/core';
import { IconTypes } from '../../enums/icon-types.enum';

@Component({
  selector: 'acshb-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() loading: boolean;
  @Input() bordered: boolean;
  @Input() collapsable: boolean;
  iconTypes: any = IconTypes;
  toggle: any = false;

  onToggleClick(e) {
    e.preventDefault();
    this.toggle = !this.toggle;
  }
}
