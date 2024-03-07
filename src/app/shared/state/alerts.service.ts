import { Injectable } from "@angular/core";
import { StoreService } from "../../store/store";
import { Alert, AlertRes } from "../../features/alerts/domain/alerts";
import { AlertsApiService } from "../services/api/alerts-api.service";
import { interval, switchMap, tap } from "rxjs";

export interface AlertsState {
  isFetching?: boolean;
  alerts: Alert[],
}

const initState: AlertsState = {
  isFetching: false,
  alerts: []
};
@Injectable({
  providedIn: 'root'
})
export class AlertsStateService extends StoreService<AlertsState> {
  alerts$ = this.select((state) => state.alerts);
  isFetching$ = this.select((state) =>  state.isFetching);
  constructor(private alertsApi: AlertsApiService) {
    super(initState);
  }
  pullAlertsByMs(ms: number) {
    interval(ms)
      .pipe(
        switchMap(() => this.alertsApi.pullAlerts()),
        tap(() =>  this.setState({isFetching: true })),
      ).subscribe((alert) => {
        this.setState({alerts: [...this.state.alerts, fromAlertsResponseToAlerts(alert)]});
        this.saveToLocalStorage(alert);
        this.setState({isFetching: false});
      })
  }
  sortBySeverity() {
    this.setState({alerts: [...this.state.alerts.sort((a: Alert, b: Alert) =>  b.severity - a.severity )]})
  }

  sortBySource() {
    this.setState({alerts: [...this.state.alerts.sort((a, b) => {
        if (a.source < b.source) {
          return -1;
        }
        if (a.source > b.source) {
          return 1;
        }
        return 0;
      })]
    })
  }

  sortByDate() {
    this.setState({
      alerts: [...this.state.alerts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())]
    })
  }

  onDismiss(id: string) {
    const filteredAlerts = this.state.alerts.filter(a => a.id !== id);
    const toLastArray = this.state.alerts.filter(a => a.id === id);

    this.setState({alerts: [...filteredAlerts, ...toLastArray]})
  }
   fetchAlerts(): Alert[] {
    const alertsJSON = localStorage.getItem('alerts');
    if (alertsJSON) {
      return JSON.parse(alertsJSON);
    }
    return [];
  }

  private saveToLocalStorage(alert: Alert) {
    const alerts = this.fetchAlerts();
    alerts.push(alert);
    localStorage.setItem('alerts', JSON.stringify(alerts));
  }
}
function fromAlertsResponseToAlerts(alert: AlertRes): Alert {
  return {...alert, isDismissed: false};
}
