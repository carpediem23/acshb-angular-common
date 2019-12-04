export class Alert {
    type: AlertType;
    title?: string;
    date?: Date;
    timer?: boolean;
    message: string;
    alertId: string;
    keepAfterRouteChange: boolean;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
