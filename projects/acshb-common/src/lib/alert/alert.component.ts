import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from './models/alert.model';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'acshb-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id: string;
  alerts: Alert[] = [];
  subscription: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.onAlert(this.id)
      .subscribe(alert => {
        if (!alert.message) {
          this.alerts = [];
          return;
        }

        this.alerts.push(alert);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'acshb-alert-success';
      case AlertType.Error:
        return 'acshb-alert-error';
      case AlertType.Info:
        return 'acshb-alert-info';
      case AlertType.Warning:
        return 'acshb-alert-warning';
    }
  }
}
