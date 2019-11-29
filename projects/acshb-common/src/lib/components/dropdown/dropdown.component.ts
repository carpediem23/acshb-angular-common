import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnInit,
  HostListener
} from '@angular/core';

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

  onToggle(e) {
    e.stopPropagation();
    this.toggle = !this.toggle;
  }

  @HostListener('document:click', [])
  onBodyClick(e) {
    this.toggle = false;
  }
}
