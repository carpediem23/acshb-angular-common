import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidebarService } from 'projects/app/src/app/services/sidebar.service';

@Component({
  selector: 'acshb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() logoUrl: string;
  @Input() fullname: string;
  @Output() menuToggleCallback: EventEmitter<any> = new EventEmitter();

  constructor(private sidebarService: SidebarService) {}

  onToolbarSelect(e) {
    console.log(e);
  }

  onMenuToggle(e) {
    if (this.sidebarService.open) {
      this.sidebarService.toggleSidebar(false);
    } else {
      this.sidebarService.toggleSidebar(true);
    }
  }
}
