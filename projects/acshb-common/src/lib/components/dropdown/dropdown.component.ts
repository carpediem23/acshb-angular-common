import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acshb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() data = [];
  @Input() color = 'primary';
  @Output() selectcallback = new EventEmitter();
  public toggle = false;

  onSelect(d) {
    this.selectcallback.emit(d);
  }

  onToggle() {
    console.log('osman');
    //this.toggle = !this.toggle;
  }
}
