import { Component, Input, OnInit } from '@angular/core';
import * as FA from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'acshb-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string;
  @Input() color: string;
  public selectedIcon;
  public selectedColor;

  ngOnInit(): void {
    this.selectedIcon = this.icon ? FA[this.icon] : FA.faCoffee;
    this.selectedColor = this.color ? {stroke: this.color, color: this.color} : {stroke: 'black', color: 'black'};
  }
}
