import { Component, OnInit, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'acshb-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() config: EChartOption = {};

  constructor() { }

  ngOnInit() {
  }
}
