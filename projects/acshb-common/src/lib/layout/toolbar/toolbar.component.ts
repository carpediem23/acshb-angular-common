import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acshb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() logoUrl: string;
  @Input() fullname: string;
  @Output() menuToggleCallback: EventEmitter<any> = new EventEmitter();

  onToolbarSelect(e) {
    console.log(e);
  }

  onMenuToggle(e) {
    if (this.menuToggleCallback) {
      this.menuToggleCallback.emit();
    }
  }
}
