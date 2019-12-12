import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from '../models/alert.model';

@Component({
  selector: 'acshb-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss']
})
export class AlertItemComponent implements OnInit {
  @Input() alert: Alert;
  @Input() className: string;
  @Output() timerEndCallback = new EventEmitter();
  @Output() closeCallback = new EventEmitter();
  duration = 5000;
  percent = 100;
  timeout;

  ngOnInit() {
    if (this.alert.timer) {
      this.progress(this.duration / 1000, this.duration / 1000);
    }
  }

  onCloseCallback() {
    if (this.closeCallback) {
      if (this.alert.timer) {
        clearTimeout(this.timeout);
      }

      this.closeCallback.emit();
    }
  }

  progress(timeleft, timetotal) {
    const progressBarWidth = timeleft * 100 / timetotal;
    this.percent = progressBarWidth;

    if (timeleft > 0) {
        this.timeout = setTimeout(() => {
            this.progress(timeleft - 1, timetotal);
        }, 1000);
    } else {
      this.timerEndCallback.emit();
      clearTimeout(this.timeout);
    }
  }
}
