import { Component, OnInit, Input } from '@angular/core';
import { CardIconTypes } from './card.enum';

@Component({
  selector: 'acshb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  private toggleIconTypes = CardIconTypes;
  public toggle = false;

  constructor() { }

  ngOnInit() { }

  onToggleClick(e) {
    e.preventDefault();
    this.toggle = !this.toggle;
  }
}
