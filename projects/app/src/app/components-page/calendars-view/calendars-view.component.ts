import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendars-view.component.html',
  styleUrls: ['./calendars-view.component.scss']
})
export class CalendarsViewComponent implements OnInit {
  sampleText = JSON.stringify({ title: 'Entegre Toplantı', date: '2020-01-01' });

  constructor() { }

  ngOnInit() {
  }

}
