import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from '../alert.model';

@Component({
  selector: 'acshb-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  @Input() alert: Alert;
  @Input() className: string;
  @Output() timerEndCallback = new EventEmitter();
  @Output() closeCallback = new EventEmitter();
  duration = 5000;
  percent = 100;
  timeout;

  constructor() { }

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
