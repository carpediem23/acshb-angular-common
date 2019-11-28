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
  public selectedIcon: object;
  public selectedColor;

  ngOnInit(): void {
    this.selectedIcon = FA[this.icon];
    this.selectedColor = this.color ? {stroke: this.color, color: this.color} : {};
  }
}
