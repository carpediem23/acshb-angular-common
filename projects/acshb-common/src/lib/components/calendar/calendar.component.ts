import { Component, OnInit, Input } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import trLocale from '@fullcalendar/core/locales/tr';

@Component({
  selector: 'acshb-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() events: Array<any>;
  calendarPlugins: Array<any> = [dayGridPlugin, bootstrapPlugin];
  locale: object = trLocale;

  constructor() { }

  ngOnInit() {
  }

}
