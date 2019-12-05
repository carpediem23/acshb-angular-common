import { Component, OnInit, Input } from '@angular/core';
import { IconTypes } from '../../enums/icon-types.enum';

@Component({
  selector: 'acshb-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean;
  iconTypes: any = IconTypes;
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.open) {
      this.toggle = this.open;
    }
  }

  onToggleClick(e) {
    this.toggle = !this.toggle;
  }
}
