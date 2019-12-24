import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns-view',
  templateUrl: './dropdowns-view.component.html',
  styleUrls: ['./dropdowns-view.component.scss']
})
export class DropdownsViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelected(d) {
    console.log(d);
  }
}
