import { Component, Input, OnInit, OnChanges } from '@angular/core';
import * as FA from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'acshb-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit, OnChanges {
  @Input() icon: string;
  @Input() color: string;
  @Input() spin: boolean;
  selectedIcon: string;
  selectedColor: object;

  ngOnInit(): void {
    this.selectedIcon = this.icon ? FA[this.icon] : FA.faCoffee;
    this.selectedColor = this.color ? {stroke: this.color, color: this.color} : {stroke: 'black', color: 'black'};
  }

  ngOnChanges(): void {
    this.selectedIcon = this.icon ? FA[this.icon] : FA.faCoffee;
  }
}
