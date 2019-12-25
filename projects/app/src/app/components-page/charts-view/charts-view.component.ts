import { Component } from '@angular/core';

@Component({
  selector: 'app-charts-view',
  templateUrl: './charts-view.component.html',
  styleUrls: ['./charts-view.component.scss']
})
export class ChartsViewComponent {
  config = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar'
    }]
  };

  constructor() {}
}
