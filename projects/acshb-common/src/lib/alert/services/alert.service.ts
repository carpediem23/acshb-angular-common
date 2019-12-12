import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Alert, AlertType } from '../models/alert.model';

/**
 * @export
 * @class AlertService
 * @description Alert servisidir. ekranda alert çıkartmak için kullanılır.
 * @example this.alertService.success('İçerik', 'Başlık', true, 'alert_success')
 */
@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }

    /**
	 * @param {string?} alertId alert kimliği.
	 * @description alert çağrısı yapıldıkça bu method tetiklenir.
	 */
    onAlert(alertId?: string): Observable<Alert> {
        return this.subject.asObservable().pipe();
    }

    /**
	 *
	 * @param {string} message ekranda gösterilmek istenilen mesajdır.
     * @param {string?} title ekranda gösterilmek istenilen alert' in başlığıdır.
     * @param {boolean?} timer eğer belli bir süre sonra kaybolması isteniliyorsa kullanılmalıdır.
     * @param {string?} alertId alert' e ait olan kimliktir.
	 * @description Ekranda 'başarılı' alert göstermek için çağırılır.
	 */
    success(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Success, alertId }));
    }

    /**
	 *
	 * @param {string} message ekranda gösterilmek istenilen mesajdır.
     * @param {string?} title ekranda gösterilmek istenilen alert' in başlığıdır.
     * @param {boolean?} timer eğer belli bir süre sonra kaybolması isteniliyorsa kullanılmalıdır.
     * @param {string?} alertId alert' e ait olan kimliktir.
	 * @description Ekranda 'hata' alert göstermek için çağırılır.
	 */
    error(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Error, alertId }));
    }

    /**
	 *
	 * @param {string} message ekranda gösterilmek istenilen mesajdır.
     * @param {string?} title ekranda gösterilmek istenilen alert' in başlığıdır.
     * @param {boolean?} timer eğer belli bir süre sonra kaybolması isteniliyorsa kullanılmalıdır.
     * @param {string?} alertId alert' e ait olan kimliktir.
	 * @description Ekranda 'bilgi' alert göstermek için çağırılır.
	 */
    info(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Info, alertId }));
    }

    /**
	 *
	 * @param {string} message ekranda gösterilmek istenilen mesajdır.
     * @param {string?} title ekranda gösterilmek istenilen alert' in başlığıdır.
     * @param {boolean?} timer eğer belli bir süre sonra kaybolması isteniliyorsa kullanılmalıdır.
     * @param {string?} alertId alert' e ait olan kimliktir.
	 * @description Ekranda 'uyarı' alert göstermek için çağırılır.
	 */
    warning(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Warning, alertId }));
    }

    /**
	 *
	 * @param {Alert} alert
	 * @description Servisi alert geldiğinie dair bilgilendirir.
	 */
    alert(alert: Alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }

    /**
	 *
	 * @param {string?} alertId
	 * @description İlgili alert' i siler.
	 */
    clear(alertId?: string) {
        this.subject.next(new Alert({ alertId }));
    }
}
