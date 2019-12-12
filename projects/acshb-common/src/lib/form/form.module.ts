import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormComponent } from './form.component';
import { NumberDirective } from './validations/number.directive';

@NgModule({
  declarations: [FormComponent, NumberDirective],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
