import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons-view',
  templateUrl: './buttons-view.component.html',
  styleUrls: ['./buttons-view.component.scss']
})
export class ButtonsViewComponent {
  constructor() { }

  onClicked(e: MouseEvent) {
    console.log(e);
  }
}
