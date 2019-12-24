import { Component, OnInit } from '@angular/core';
import { AlertService } from 'projects/acshb-common/src/lib/alert/services/alert.service';

@Component({
  selector: 'app-alerts-view',
  templateUrl: './alerts-view.component.html',
  styleUrls: ['./alerts-view.component.scss']
})
export class AlertsViewComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  onAlertClicked(type, timer) {
    switch (type) {
      case 'success':
        if (timer) {
          this.alertService.success('Bu bir başarı mesajıdır.', 'Başlık', true, '0');
        } else {
          this.alertService.success('Bu bir başarı mesajıdır.', 'Başlık', false, '0');
        }
        break;
      case 'info':
        if (timer) {
          this.alertService.info('Bu bir bilgi mesajıdır.', 'Başlık', true, '0');
        } else {
          this.alertService.info('Bu bir bilgi mesajıdır.', 'Başlık', false, '0');
        }
        break;
      case 'warning':
        if (timer) {
          this.alertService.warning('Bu bir uyarı mesajıdır.', 'Başlık', true, '0');
        } else {
          this.alertService.warning('Bu bir uyarı mesajıdır.', 'Başlık', false, '0');
        }
        break;
      case 'error':
        if (timer) {
          this.alertService.error('Bu bir hata mesajıdır.', 'Başlık', true, '0');
        } else {
          this.alertService.error('Bu bir hata mesajıdır.', 'Başlık', false, '0');
        }
        break;
      default:
        if (timer) {
          this.alertService.info('Bu bir bilgi mesajıdır.', 'Başlık', true, '0');
        } else {
          this.alertService.info('Bu bir bilgi mesajıdır.', 'Başlık', false, '0');
        }
        break;
    }
  }
}
