import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'acshb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items;
  @Input() open;
  @Output() linkClickedEvent: EventEmitter<any> = new EventEmitter();
  activePath = '/';

  constructor() { }

  ngOnInit() {
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
