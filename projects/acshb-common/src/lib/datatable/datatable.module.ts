import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2TableModule } from 'ng2-table/ng2-table';

@NgModule({
  declarations: [DatatableComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    Ng2TableModule
  ],
  exports: [DatatableComponent]
})
export class DatatableModule { }
