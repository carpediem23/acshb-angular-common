import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acshb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string;
  @Input() title: string;
  @Input() className: string;
  @Input() disabled: boolean;
  @Input() loading: boolean;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  onClicked(e: MouseEvent) {
    this.clicked.emit(e);
  }
}
