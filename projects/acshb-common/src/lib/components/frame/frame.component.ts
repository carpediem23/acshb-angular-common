import { Component, Input } from '@angular/core';

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
  toggle: any = false;

  onToggleClick(e) {
    e.preventDefault();
    this.toggle = !this.toggle;
  }
}
