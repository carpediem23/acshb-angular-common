import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [DatatableComponent]
})
export class DatatableModule { }
