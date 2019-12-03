export class Alert {
    type: AlertType;
    title?: string;
    date?: Date;
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
