import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalItemComponent } from './modal-item/modal-item.component';



@NgModule({
  declarations: [ModalComponent, ModalItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
