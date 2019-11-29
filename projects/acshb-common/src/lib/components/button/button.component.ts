import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'acshb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() className: string;
  @Input() disabled: boolean;
  @Input() loading: boolean;
  @Output() clicked = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onClicked(e: MouseEvent) {
    this.clicked.emit(e);
  }
}
