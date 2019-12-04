import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from './alert.model';

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

    // enable subscribing to alerts observable
    /* onAlert(alertId?: string): Observable<Alert> {
        return this.subject.asObservable().pipe(filter(x => x && x.alertId === alertId));
    } */

    onAlert(alertId?: string): Observable<Alert> {
        return this.subject.asObservable().pipe();
    }

    success(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Success, alertId }));
    }

    error(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Error, alertId }));
    }

    info(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Info, alertId }));
    }

    warning(message: string, title?: string, timer?: boolean, alertId?: string) {
        this.alert(new Alert({ message, title, timer, type: AlertType.Warning, alertId }));
    }

    alert(alert: Alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }

    clear(alertId?: string) {
        this.subject.next(new Alert({ alertId }));
    }
}
