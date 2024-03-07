import { Injectable } from "@angular/core";
import {  AlertsStateService } from "../../../shared/state/alerts.service";

@Injectable()
export class AlertsFacade {

  alerts$ = this.alertsState.alerts$;
  isFetching$ = this.alertsState.isFetching$;
  constructor(private alertsState: AlertsStateService) {}

  startPulling(ms: number) {
    this.alertsState.pullAlertsByMs(ms);
  }

  sortBySeverity() {
    this.alertsState.sortBySeverity();
  }
  sortBySource() {
    this.alertsState.sortBySource();
  }

  sortByDate() {
    this.alertsState.sortByDate()
  }

  onDismiss(id: string) {
    this.alertsState.onDismiss(id);
  }
}
