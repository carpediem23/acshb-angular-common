import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import trLocale from '@fullcalendar/core/locales/tr';

@Component({
  selector: 'acshb-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnChanges {
  @Input() events: Array<any> = new Array<any>();
  calendarOptions: CalendarOptions;

  constructor() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap',
      buttonText: { prev: '<', next: '>' },
      locale: trLocale,
      events: this.events,
      eventColor: '#f55145'
    };
    console.log(this.events);
  }

  ngOnChanges(): void {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      themeSystem: 'bootstrap',
      buttonText: { prev: '<', next: '>' },
      locale: trLocale,
      events: this.events,
      eventColor: '#f55145'
    };
  }

}
