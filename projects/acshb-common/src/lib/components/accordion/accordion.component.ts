import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'acshb-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean;
  toggle = false;

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
