import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    NgxEchartsModule
  ],
  exports: [ChartComponent]
})
export class ChartModule { }
