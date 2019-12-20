import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'acshb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() items;
  @Input() activePath;

  constructor() { }

  ngOnInit() {
  }

  onLinkClicked(e, item) {
    e.stopPropagation();
    e.preventDefault();

    if (item.children) {
      // çocukları olan link tıklandı state değiştir
      const element = e.currentTarget.querySelector('ul');
      const collapsed = !element.classList.contains('show');

      if (collapsed) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }

    } else {
      // note: link tıklandı dışarı fırlat
    }
  }

  onTest(e) {
    e.stopPropagation();
    e.preventDefault();
  }
}
