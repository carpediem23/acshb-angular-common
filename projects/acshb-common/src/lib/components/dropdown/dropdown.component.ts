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
  @Input() title;
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

  @HostListener('window:click', ['$event'])
  onBodyClick(e): void {
    this.toggle = false;
  }
}
