import { Component, OnInit, Input } from '@angular/core';
import { IconTypes } from '../../enums/icon-types.enum';

@Component({
  selector: 'acshb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  private iconTypes = IconTypes;
  public toggle = false;

  constructor() { }

  ngOnInit() { }

  onToggleClick(e) {
    e.preventDefault();
    this.toggle = !this.toggle;
  }
}
