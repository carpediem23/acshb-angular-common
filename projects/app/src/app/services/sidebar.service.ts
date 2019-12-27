import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  subject = new Subject();
  open = true;
  breakpointSize = 992;

  get isMobileSize() {
    return window.innerWidth < this.breakpointSize;
  }

  constructor() {
    if (this.isMobileSize) {
      document.body.classList.remove('overflow-hidden');
      this.toggleSidebar(false);
    } else {
      document.body.classList.add('overflow-hidden');
    }
  }

  toggleSidebar(open) {
    this.open = open;

    if (this.open && this.isMobileSize) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    this.subject.next(this.open);
  }
}
