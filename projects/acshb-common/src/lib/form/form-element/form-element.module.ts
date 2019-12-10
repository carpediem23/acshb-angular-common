import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementComponent } from './form-element.component';



@NgModule({
  declarations: [FormElementComponent],
  imports: [
    CommonModule
  ],
  exports: [FormElementComponent]
})
export class FormElementModule { }
