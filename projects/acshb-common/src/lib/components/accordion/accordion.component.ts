import { Component, OnInit, Input } from '@angular/core';
import { IconTypes } from '../../enums/icon-types.enum';

@Component({
  selector: 'acshb-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() title: string;
  iconTypes: any = IconTypes;
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleClick(e) {
    this.toggle = !this.toggle;
  }
}
