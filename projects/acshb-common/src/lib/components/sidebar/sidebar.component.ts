import { Component, Input, EventEmitter, Output, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'acshb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnChanges {
  @Input() items;
  @Input() open = true;
  @Output() linkClickedEvent: EventEmitter<any> = new EventEmitter();
  activePath = window.location.pathname;
  private breakpointSize = 992;

  get isMobileSize() {
    return window.innerWidth < this.breakpointSize;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.open && changes.open.previousValue !== changes.open.currentValue) {
      this.open = changes.open.currentValue;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth < this.breakpointSize) {
      if (this.open) {
        this.open = false;
      }
    } else {
      if (!this.open) {
        document.body.classList.remove('overflow-hidden');
        this.open = true;
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
