import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
  public selectedIcon;
  public selectedColor;

  ngOnInit(): void {
    this.selectedIcon = this.icon ? FA[this.icon] : FA.faCoffee;
    this.selectedColor = this.color ? {stroke: this.color, color: this.color} : {stroke: 'black', color: 'black'};
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedIcon = this.icon ? FA[this.icon] : FA.faCoffee;
  }
}
