import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';
import { SidebarService } from 'projects/app/src/app/services/sidebar.service';

@Component({
  selector: 'acshb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items;
  @Output() linkClickedEvent: EventEmitter<any> = new EventEmitter();
  activePath = window.location.pathname;
  breakpointSize = 992;

  get isOpen() {
    return this.sidebarService.open;
  }

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
  }

  @HostListener('window:resize', [])
  onResize() {
    if (this.sidebarService.isMobileSize) {
      if (this.sidebarService.open) {
        this.sidebarService.toggleSidebar(false);
        document.body.classList.remove('overflow-hidden');
      }
    } else {
      if (!this.sidebarService.open) {
        this.sidebarService.toggleSidebar(true);
        document.body.classList.remove('overflow-hidden');
      }
    }
  }

  onLinkClicked(e, item) {
    e.stopPropagation();
    e.preventDefault();

    if (item.children) {
      const element = e.currentTarget.querySelector('ul');
      const collapsed = !element.classList.contains('show');

      if (collapsed) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }

    } else {
      if (this.linkClickedEvent) {
        this.activePath = item.url;
        this.linkClickedEvent.emit(item);
      }
    }
  }

  onSubLinkClicked(e, item) {
    e.stopPropagation();
    e.preventDefault();

    if (this.linkClickedEvent) {
      this.activePath = item.url;
      this.linkClickedEvent.emit(item);
    }
  }

  onChildClicked(e) {
    e.stopPropagation();
    e.preventDefault();
  }
}
