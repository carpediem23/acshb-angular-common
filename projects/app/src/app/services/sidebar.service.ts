import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  subject = new Subject();
  open = true;

  constructor() { }

  toggleSidebar(open) {
    this.open = open;
    this.subject.next(this.open);
  }
}
