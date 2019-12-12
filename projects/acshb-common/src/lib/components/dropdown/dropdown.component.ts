import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Component({
  selector: 'acshb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() title: string;
  @Input() data: Array<any> = [];
  @Input() color = 'primary';
  @Output() selectCallback: EventEmitter<any> = new EventEmitter<any>();
  toggle = false;

  onSelect(d) {
    this.selectCallback.emit(d);
  }

  onToggle(e) {
    e.stopPropagation();
    this.toggle = !this.toggle;
  }

  @HostListener('window:click', ['$event'])
  onBodyClick(e): void {
    this.toggle = false;
  }
}
