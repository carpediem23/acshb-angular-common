import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acshb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  @Input() logoUrl;
  @Input() fullname;
  @Output() menuToggleCallback = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToolbarSelect(e) {
    console.log(e);
  }

  onMenuToggle(e) {
    if (this.menuToggleCallback) {
      this.menuToggleCallback.emit();
    }
  }
}
