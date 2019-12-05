import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'acshb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @Input() title: string;
  @Input() show: boolean;
  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter();
  @Output() onSubmitEvent: EventEmitter<any> = new EventEmitter();

  onClose() {
    if (this.onCloseEvent) {
      this.onCloseEvent.emit();
    }
  }

  onSubmit() {
    if (this.onSubmitEvent) {
      this.onSubmitEvent.emit();
    }
  }
}
