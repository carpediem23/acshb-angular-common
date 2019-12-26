import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'acshb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() icon;
  @Input() classNames;
  @Input() title;
  @Input() value;
  @Input() footer;

  constructor() { }
}
