import { Component } from '@angular/core';

@Component({
  selector: 'app-modals-view',
  templateUrl: './modals-view.component.html',
  styleUrls: ['./modals-view.component.scss']
})
export class ModalsViewComponent {
  modalOpen = false;

  constructor() { }

  onModalSubmit() {
    this.modalOpen = false;
    console.log('on modal submit');
  }

  onModalClose() {
    this.modalOpen = false;
    console.log('on modal close');
  }

  onModalOpen() {
    this.modalOpen = true;
  }
}
